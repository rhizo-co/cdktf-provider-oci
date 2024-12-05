# `dataOciCoreComputeImageCapabilitySchema` Submodule <a name="`dataOciCoreComputeImageCapabilitySchema` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeImageCapabilitySchema <a name="DataOciCoreComputeImageCapabilitySchema" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema oci_core_compute_image_capability_schema}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeImageCapabilitySchema(Construct Scope, string Id, DataOciCoreComputeImageCapabilitySchemaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig">DataOciCoreComputeImageCapabilitySchemaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig">DataOciCoreComputeImageCapabilitySchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.resetIsMergeEnabled">ResetIsMergeEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetIsMergeEnabled` <a name="ResetIsMergeEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.resetIsMergeEnabled"></a>

```csharp
private void ResetIsMergeEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeImageCapabilitySchema resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreComputeImageCapabilitySchema.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreComputeImageCapabilitySchema.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreComputeImageCapabilitySchema.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreComputeImageCapabilitySchema.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreComputeImageCapabilitySchema resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreComputeImageCapabilitySchema to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreComputeImageCapabilitySchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeImageCapabilitySchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeGlobalImageCapabilitySchemaId">ComputeGlobalImageCapabilitySchemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeGlobalImageCapabilitySchemaVersionName">ComputeGlobalImageCapabilitySchemaVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.schemaData">SchemaData</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeImageCapabilitySchemaIdInput">ComputeImageCapabilitySchemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.isMergeEnabledInput">IsMergeEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeImageCapabilitySchemaId">ComputeImageCapabilitySchemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.isMergeEnabled">IsMergeEnabled</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeGlobalImageCapabilitySchemaId`<sup>Required</sup> <a name="ComputeGlobalImageCapabilitySchemaId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeGlobalImageCapabilitySchemaId"></a>

```csharp
public string ComputeGlobalImageCapabilitySchemaId { get; }
```

- *Type:* string

---

##### `ComputeGlobalImageCapabilitySchemaVersionName`<sup>Required</sup> <a name="ComputeGlobalImageCapabilitySchemaVersionName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeGlobalImageCapabilitySchemaVersionName"></a>

```csharp
public string ComputeGlobalImageCapabilitySchemaVersionName { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `SchemaData`<sup>Required</sup> <a name="SchemaData" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.schemaData"></a>

```csharp
public StringMap SchemaData { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `ComputeImageCapabilitySchemaIdInput`<sup>Optional</sup> <a name="ComputeImageCapabilitySchemaIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeImageCapabilitySchemaIdInput"></a>

```csharp
public string ComputeImageCapabilitySchemaIdInput { get; }
```

- *Type:* string

---

##### `IsMergeEnabledInput`<sup>Optional</sup> <a name="IsMergeEnabledInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.isMergeEnabledInput"></a>

```csharp
public string IsMergeEnabledInput { get; }
```

- *Type:* string

---

##### `ComputeImageCapabilitySchemaId`<sup>Required</sup> <a name="ComputeImageCapabilitySchemaId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.computeImageCapabilitySchemaId"></a>

```csharp
public string ComputeImageCapabilitySchemaId { get; }
```

- *Type:* string

---

##### `IsMergeEnabled`<sup>Required</sup> <a name="IsMergeEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.isMergeEnabled"></a>

```csharp
public string IsMergeEnabled { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchema.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeImageCapabilitySchemaConfig <a name="DataOciCoreComputeImageCapabilitySchemaConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeImageCapabilitySchemaConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ComputeImageCapabilitySchemaId,
    string IsMergeEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.computeImageCapabilitySchemaId">ComputeImageCapabilitySchemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#compute_image_capability_schema_id DataOciCoreComputeImageCapabilitySchema#compute_image_capability_schema_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.isMergeEnabled">IsMergeEnabled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#is_merge_enabled DataOciCoreComputeImageCapabilitySchema#is_merge_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ComputeImageCapabilitySchemaId`<sup>Required</sup> <a name="ComputeImageCapabilitySchemaId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.computeImageCapabilitySchemaId"></a>

```csharp
public string ComputeImageCapabilitySchemaId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#compute_image_capability_schema_id DataOciCoreComputeImageCapabilitySchema#compute_image_capability_schema_id}.

---

##### `IsMergeEnabled`<sup>Optional</sup> <a name="IsMergeEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchema.DataOciCoreComputeImageCapabilitySchemaConfig.property.isMergeEnabled"></a>

```csharp
public string IsMergeEnabled { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schema#is_merge_enabled DataOciCoreComputeImageCapabilitySchema#is_merge_enabled}.

---



