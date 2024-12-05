# `dataOciGenericArtifactsContentGenericArtifactsContent` Submodule <a name="`dataOciGenericArtifactsContentGenericArtifactsContent` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenericArtifactsContentGenericArtifactsContent <a name="DataOciGenericArtifactsContentGenericArtifactsContent" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_generic_artifacts_content oci_generic_artifacts_content_generic_artifacts_content}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenericArtifactsContentGenericArtifactsContent(Construct Scope, string Id, DataOciGenericArtifactsContentGenericArtifactsContentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig">DataOciGenericArtifactsContentGenericArtifactsContentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig">DataOciGenericArtifactsContentGenericArtifactsContentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenericArtifactsContentGenericArtifactsContent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenericArtifactsContentGenericArtifactsContent.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenericArtifactsContentGenericArtifactsContent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenericArtifactsContentGenericArtifactsContent.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciGenericArtifactsContentGenericArtifactsContent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciGenericArtifactsContentGenericArtifactsContent resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGenericArtifactsContentGenericArtifactsContent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGenericArtifactsContentGenericArtifactsContent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_generic_artifacts_content#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenericArtifactsContentGenericArtifactsContent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.artifactIdInput">ArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.artifactId">ArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.artifactIdInput"></a>

```csharp
public string ArtifactIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.artifactId"></a>

```csharp
public string ArtifactId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenericArtifactsContentGenericArtifactsContentConfig <a name="DataOciGenericArtifactsContentGenericArtifactsContentConfig" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciGenericArtifactsContentGenericArtifactsContentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ArtifactId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.artifactId">ArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_generic_artifacts_content#artifact_id DataOciGenericArtifactsContentGenericArtifactsContent#artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_generic_artifacts_content#id DataOciGenericArtifactsContentGenericArtifactsContent#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.artifactId"></a>

```csharp
public string ArtifactId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_generic_artifacts_content#artifact_id DataOciGenericArtifactsContentGenericArtifactsContent#artifact_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentGenericArtifactsContent.DataOciGenericArtifactsContentGenericArtifactsContentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_generic_artifacts_content#id DataOciGenericArtifactsContentGenericArtifactsContent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


