# `dataOciDatabaseAutonomousDatabaseSoftwareImages` Submodule <a name="`dataOciDatabaseAutonomousDatabaseSoftwareImages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseSoftwareImages <a name="DataOciDatabaseAutonomousDatabaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images oci_database_autonomous_database_software_images}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseSoftwareImages(Construct Scope, string Id, DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig">DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig">DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseSoftwareImages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousDatabaseSoftwareImages.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousDatabaseSoftwareImages.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousDatabaseSoftwareImages.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseAutonomousDatabaseSoftwareImages.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseSoftwareImages resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseSoftwareImages to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousDatabaseSoftwareImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseSoftwareImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.autonomousDatabaseSoftwareImageCollection">AutonomousDatabaseSoftwareImageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.imageShapeFamilyInput">ImageShapeFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.imageShapeFamily">ImageShapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutonomousDatabaseSoftwareImageCollection`<sup>Required</sup> <a name="AutonomousDatabaseSoftwareImageCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.autonomousDatabaseSoftwareImageCollection"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList AutonomousDatabaseSoftwareImageCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.filter"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageShapeFamilyInput`<sup>Optional</sup> <a name="ImageShapeFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.imageShapeFamilyInput"></a>

```csharp
public string ImageShapeFamilyInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageShapeFamily`<sup>Required</sup> <a name="ImageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.imageShapeFamily"></a>

```csharp
public string ImageShapeFamily { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection {

};
```


### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems {

};
```


### DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ImageShapeFamily,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#compartment_id DataOciDatabaseAutonomousDatabaseSoftwareImages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.imageShapeFamily">ImageShapeFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#image_shape_family DataOciDatabaseAutonomousDatabaseSoftwareImages#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#display_name DataOciDatabaseAutonomousDatabaseSoftwareImages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#id DataOciDatabaseAutonomousDatabaseSoftwareImages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#state DataOciDatabaseAutonomousDatabaseSoftwareImages#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#compartment_id DataOciDatabaseAutonomousDatabaseSoftwareImages#compartment_id}.

---

##### `ImageShapeFamily`<sup>Required</sup> <a name="ImageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.imageShapeFamily"></a>

```csharp
public string ImageShapeFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#image_shape_family DataOciDatabaseAutonomousDatabaseSoftwareImages#image_shape_family}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#display_name DataOciDatabaseAutonomousDatabaseSoftwareImages#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#filter DataOciDatabaseAutonomousDatabaseSoftwareImages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#id DataOciDatabaseAutonomousDatabaseSoftwareImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#state DataOciDatabaseAutonomousDatabaseSoftwareImages#state}.

---

### DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#name DataOciDatabaseAutonomousDatabaseSoftwareImages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#values DataOciDatabaseAutonomousDatabaseSoftwareImages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#regex DataOciDatabaseAutonomousDatabaseSoftwareImages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#name DataOciDatabaseAutonomousDatabaseSoftwareImages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#values DataOciDatabaseAutonomousDatabaseSoftwareImages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#regex DataOciDatabaseAutonomousDatabaseSoftwareImages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.autonomousDsiOneOffPatches">AutonomousDsiOneOffPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.imageShapeFamily">ImageShapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.releaseUpdate">ReleaseUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.sourceCdbId">SourceCdbId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutonomousDsiOneOffPatches`<sup>Required</sup> <a name="AutonomousDsiOneOffPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.autonomousDsiOneOffPatches"></a>

```csharp
public string[] AutonomousDsiOneOffPatches { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageShapeFamily`<sup>Required</sup> <a name="ImageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.imageShapeFamily"></a>

```csharp
public string ImageShapeFamily { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ReleaseUpdate`<sup>Required</sup> <a name="ReleaseUpdate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.releaseUpdate"></a>

```csharp
public string ReleaseUpdate { get; }
```

- *Type:* string

---

##### `SourceCdbId`<sup>Required</sup> <a name="SourceCdbId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.sourceCdbId"></a>

```csharp
public string SourceCdbId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems</a>

---


### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection</a>

---


### DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.get"></a>

```csharp
private DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



