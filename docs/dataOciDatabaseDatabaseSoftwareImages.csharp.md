# `dataOciDatabaseDatabaseSoftwareImages` Submodule <a name="`dataOciDatabaseDatabaseSoftwareImages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDatabaseSoftwareImages <a name="DataOciDatabaseDatabaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images oci_database_database_software_images}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDatabaseSoftwareImages(Construct Scope, string Id, DataOciDatabaseDatabaseSoftwareImagesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig">DataOciDatabaseDatabaseSoftwareImagesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig">DataOciDatabaseDatabaseSoftwareImagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageShapeFamily">ResetImageShapeFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageType">ResetImageType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetIsUpgradeSupported">ResetIsUpgradeSupported</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageShapeFamily` <a name="ResetImageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageShapeFamily"></a>

```csharp
private void ResetImageShapeFamily()
```

##### `ResetImageType` <a name="ResetImageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageType"></a>

```csharp
private void ResetImageType()
```

##### `ResetIsUpgradeSupported` <a name="ResetIsUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetIsUpgradeSupported"></a>

```csharp
private void ResetIsUpgradeSupported()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDatabaseSoftwareImages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDatabaseSoftwareImages.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDatabaseSoftwareImages.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDatabaseSoftwareImages.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseDatabaseSoftwareImages.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseDatabaseSoftwareImages resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseDatabaseSoftwareImages to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseDatabaseSoftwareImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDatabaseSoftwareImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.databaseSoftwareImages">DatabaseSoftwareImages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList">DataOciDatabaseDatabaseSoftwareImagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamilyInput">ImageShapeFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageTypeInput">ImageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupportedInput">IsUpgradeSupportedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamily">ImageShapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageType">ImageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupported">IsUpgradeSupported</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DatabaseSoftwareImages`<sup>Required</sup> <a name="DatabaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.databaseSoftwareImages"></a>

```csharp
public DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList DatabaseSoftwareImages { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filter"></a>

```csharp
public DataOciDatabaseDatabaseSoftwareImagesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList">DataOciDatabaseDatabaseSoftwareImagesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageShapeFamilyInput`<sup>Optional</sup> <a name="ImageShapeFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamilyInput"></a>

```csharp
public string ImageShapeFamilyInput { get; }
```

- *Type:* string

---

##### `ImageTypeInput`<sup>Optional</sup> <a name="ImageTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageTypeInput"></a>

```csharp
public string ImageTypeInput { get; }
```

- *Type:* string

---

##### `IsUpgradeSupportedInput`<sup>Optional</sup> <a name="IsUpgradeSupportedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupportedInput"></a>

```csharp
public object IsUpgradeSupportedInput { get; }
```

- *Type:* object

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageShapeFamily`<sup>Required</sup> <a name="ImageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamily"></a>

```csharp
public string ImageShapeFamily { get; }
```

- *Type:* string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageType"></a>

```csharp
public string ImageType { get; }
```

- *Type:* string

---

##### `IsUpgradeSupported`<sup>Required</sup> <a name="IsUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupported"></a>

```csharp
public object IsUpgradeSupported { get; }
```

- *Type:* object

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDatabaseSoftwareImagesConfig <a name="DataOciDatabaseDatabaseSoftwareImagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDatabaseSoftwareImagesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string ImageShapeFamily = null,
    string ImageType = null,
    object IsUpgradeSupported = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#compartment_id DataOciDatabaseDatabaseSoftwareImages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#display_name DataOciDatabaseDatabaseSoftwareImages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#id DataOciDatabaseDatabaseSoftwareImages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageShapeFamily">ImageShapeFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_shape_family DataOciDatabaseDatabaseSoftwareImages#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageType">ImageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_type DataOciDatabaseDatabaseSoftwareImages#image_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.isUpgradeSupported">IsUpgradeSupported</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#is_upgrade_supported DataOciDatabaseDatabaseSoftwareImages#is_upgrade_supported}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#state DataOciDatabaseDatabaseSoftwareImages#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#compartment_id DataOciDatabaseDatabaseSoftwareImages#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#display_name DataOciDatabaseDatabaseSoftwareImages#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#filter DataOciDatabaseDatabaseSoftwareImages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#id DataOciDatabaseDatabaseSoftwareImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageShapeFamily`<sup>Optional</sup> <a name="ImageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageShapeFamily"></a>

```csharp
public string ImageShapeFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_shape_family DataOciDatabaseDatabaseSoftwareImages#image_shape_family}.

---

##### `ImageType`<sup>Optional</sup> <a name="ImageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageType"></a>

```csharp
public string ImageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_type DataOciDatabaseDatabaseSoftwareImages#image_type}.

---

##### `IsUpgradeSupported`<sup>Optional</sup> <a name="IsUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.isUpgradeSupported"></a>

```csharp
public object IsUpgradeSupported { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#is_upgrade_supported DataOciDatabaseDatabaseSoftwareImages#is_upgrade_supported}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#state DataOciDatabaseDatabaseSoftwareImages#state}.

---

### DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages <a name="DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages {

};
```


### DataOciDatabaseDatabaseSoftwareImagesFilter <a name="DataOciDatabaseDatabaseSoftwareImagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDatabaseSoftwareImagesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#name DataOciDatabaseDatabaseSoftwareImages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#values DataOciDatabaseDatabaseSoftwareImages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#regex DataOciDatabaseDatabaseSoftwareImages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#name DataOciDatabaseDatabaseSoftwareImages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#values DataOciDatabaseDatabaseSoftwareImages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#regex DataOciDatabaseDatabaseSoftwareImages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList <a name="DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.get"></a>

```csharp
private DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference <a name="DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageIncludedPatches">DatabaseSoftwareImageIncludedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageOneOffPatches">DatabaseSoftwareImageOneOffPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageShapeFamily">ImageShapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageType">ImageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.includedPatchesSummary">IncludedPatchesSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.isUpgradeSupported">IsUpgradeSupported</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lsInventory">LsInventory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.patchSet">PatchSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.sourceDbHomeId">SourceDbHomeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DatabaseSoftwareImageIncludedPatches`<sup>Required</sup> <a name="DatabaseSoftwareImageIncludedPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageIncludedPatches"></a>

```csharp
public string[] DatabaseSoftwareImageIncludedPatches { get; }
```

- *Type:* string[]

---

##### `DatabaseSoftwareImageOneOffPatches`<sup>Required</sup> <a name="DatabaseSoftwareImageOneOffPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageOneOffPatches"></a>

```csharp
public string[] DatabaseSoftwareImageOneOffPatches { get; }
```

- *Type:* string[]

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageShapeFamily`<sup>Required</sup> <a name="ImageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageShapeFamily"></a>

```csharp
public string ImageShapeFamily { get; }
```

- *Type:* string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageType"></a>

```csharp
public string ImageType { get; }
```

- *Type:* string

---

##### `IncludedPatchesSummary`<sup>Required</sup> <a name="IncludedPatchesSummary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.includedPatchesSummary"></a>

```csharp
public string IncludedPatchesSummary { get; }
```

- *Type:* string

---

##### `IsUpgradeSupported`<sup>Required</sup> <a name="IsUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.isUpgradeSupported"></a>

```csharp
public IResolvable IsUpgradeSupported { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LsInventory`<sup>Required</sup> <a name="LsInventory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lsInventory"></a>

```csharp
public string LsInventory { get; }
```

- *Type:* string

---

##### `PatchSet`<sup>Required</sup> <a name="PatchSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.patchSet"></a>

```csharp
public string PatchSet { get; }
```

- *Type:* string

---

##### `SourceDbHomeId`<sup>Required</sup> <a name="SourceDbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.sourceDbHomeId"></a>

```csharp
public string SourceDbHomeId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages</a>

---


### DataOciDatabaseDatabaseSoftwareImagesFilterList <a name="DataOciDatabaseDatabaseSoftwareImagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDatabaseSoftwareImagesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.get"></a>

```csharp
private DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference <a name="DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



