# `dataOciFleetSoftwareUpdateFsuCycles` Submodule <a name="`dataOciFleetSoftwareUpdateFsuCycles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetSoftwareUpdateFsuCycles <a name="DataOciFleetSoftwareUpdateFsuCycles" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles oci_fleet_software_update_fsu_cycles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCycles(Construct Scope, string Id, DataOciFleetSoftwareUpdateFsuCyclesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig">DataOciFleetSoftwareUpdateFsuCyclesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig">DataOciFleetSoftwareUpdateFsuCyclesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetCollectionType">ResetCollectionType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetFsuCollectionId">ResetFsuCollectionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetTargetVersion">ResetTargetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCollectionType` <a name="ResetCollectionType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetCollectionType"></a>

```csharp
private void ResetCollectionType()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetFsuCollectionId` <a name="ResetFsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetFsuCollectionId"></a>

```csharp
private void ResetFsuCollectionId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTargetVersion` <a name="ResetTargetVersion" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetTargetVersion"></a>

```csharp
private void ResetTargetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCycles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetSoftwareUpdateFsuCycles.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetSoftwareUpdateFsuCycles.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetSoftwareUpdateFsuCycles.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetSoftwareUpdateFsuCycles.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCycles resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetSoftwareUpdateFsuCycles to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetSoftwareUpdateFsuCycles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetSoftwareUpdateFsuCycles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList">DataOciFleetSoftwareUpdateFsuCyclesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCycleSummaryCollection">FsuCycleSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.collectionTypeInput">CollectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCollectionIdInput">FsuCollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.targetVersionInput">TargetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.collectionType">CollectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCollectionId">FsuCollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.targetVersion">TargetVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.filter"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList">DataOciFleetSoftwareUpdateFsuCyclesFilterList</a>

---

##### `FsuCycleSummaryCollection`<sup>Required</sup> <a name="FsuCycleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCycleSummaryCollection"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList FsuCycleSummaryCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList</a>

---

##### `CollectionTypeInput`<sup>Optional</sup> <a name="CollectionTypeInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.collectionTypeInput"></a>

```csharp
public string CollectionTypeInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `FsuCollectionIdInput`<sup>Optional</sup> <a name="FsuCollectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCollectionIdInput"></a>

```csharp
public string FsuCollectionIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TargetVersionInput`<sup>Optional</sup> <a name="TargetVersionInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.targetVersionInput"></a>

```csharp
public string TargetVersionInput { get; }
```

- *Type:* string

---

##### `CollectionType`<sup>Required</sup> <a name="CollectionType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.collectionType"></a>

```csharp
public string CollectionType { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FsuCollectionId`<sup>Required</sup> <a name="FsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCollectionId"></a>

```csharp
public string FsuCollectionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.targetVersion"></a>

```csharp
public string TargetVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetSoftwareUpdateFsuCyclesConfig <a name="DataOciFleetSoftwareUpdateFsuCyclesConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string CollectionType = null,
    string DisplayName = null,
    object Filter = null,
    string FsuCollectionId = null,
    string Id = null,
    string State = null,
    string TargetVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#compartment_id DataOciFleetSoftwareUpdateFsuCycles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.collectionType">CollectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#collection_type DataOciFleetSoftwareUpdateFsuCycles#collection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#display_name DataOciFleetSoftwareUpdateFsuCycles#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.fsuCollectionId">FsuCollectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#fsu_collection_id DataOciFleetSoftwareUpdateFsuCycles#fsu_collection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#id DataOciFleetSoftwareUpdateFsuCycles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#state DataOciFleetSoftwareUpdateFsuCycles#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.targetVersion">TargetVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#target_version DataOciFleetSoftwareUpdateFsuCycles#target_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#compartment_id DataOciFleetSoftwareUpdateFsuCycles#compartment_id}.

---

##### `CollectionType`<sup>Optional</sup> <a name="CollectionType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.collectionType"></a>

```csharp
public string CollectionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#collection_type DataOciFleetSoftwareUpdateFsuCycles#collection_type}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#display_name DataOciFleetSoftwareUpdateFsuCycles#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#filter DataOciFleetSoftwareUpdateFsuCycles#filter}

---

##### `FsuCollectionId`<sup>Optional</sup> <a name="FsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.fsuCollectionId"></a>

```csharp
public string FsuCollectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#fsu_collection_id DataOciFleetSoftwareUpdateFsuCycles#fsu_collection_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#id DataOciFleetSoftwareUpdateFsuCycles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#state DataOciFleetSoftwareUpdateFsuCycles#state}.

---

##### `TargetVersion`<sup>Optional</sup> <a name="TargetVersion" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.targetVersion"></a>

```csharp
public string TargetVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#target_version DataOciFleetSoftwareUpdateFsuCycles#target_version}.

---

### DataOciFleetSoftwareUpdateFsuCyclesFilter <a name="DataOciFleetSoftwareUpdateFsuCyclesFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#name DataOciFleetSoftwareUpdateFsuCycles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#values DataOciFleetSoftwareUpdateFsuCycles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#regex DataOciFleetSoftwareUpdateFsuCycles#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#name DataOciFleetSoftwareUpdateFsuCycles#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#values DataOciFleetSoftwareUpdateFsuCycles#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#regex DataOciFleetSoftwareUpdateFsuCycles#regex}.

---

### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection {

};
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems {

};
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule {

};
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy {

};
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection {

};
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails {

};
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute {

};
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetSoftwareUpdateFsuCyclesFilterList <a name="DataOciFleetSoftwareUpdateFsuCyclesFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.timeToStart">TimeToStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeToStart`<sup>Required</sup> <a name="TimeToStart" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.timeToStart"></a>

```csharp
public string TimeToStart { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.isForceRolling">IsForceRolling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.isWaitForBatchResume">IsWaitForBatchResume</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsForceRolling`<sup>Required</sup> <a name="IsForceRolling" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.isForceRolling"></a>

```csharp
public IResolvable IsForceRolling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsWaitForBatchResume`<sup>Required</sup> <a name="IsWaitForBatchResume" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.isWaitForBatchResume"></a>

```csharp
public IResolvable IsWaitForBatchResume { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.logCollectionMode">LogCollectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogCollectionMode`<sup>Required</sup> <a name="LogCollectionMode" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.logCollectionMode"></a>

```csharp
public string LogCollectionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.homePolicy">HomePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.newHomePrefix">NewHomePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.softwareImageId">SoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HomePolicy`<sup>Required</sup> <a name="HomePolicy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.homePolicy"></a>

```csharp
public string HomePolicy { get; }
```

- *Type:* string

---

##### `NewHomePrefix`<sup>Required</sup> <a name="NewHomePrefix" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.newHomePrefix"></a>

```csharp
public string NewHomePrefix { get; }
```

- *Type:* string

---

##### `SoftwareImageId`<sup>Required</sup> <a name="SoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.softwareImageId"></a>

```csharp
public string SoftwareImageId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.timeToStart">TimeToStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeToStart`<sup>Required</sup> <a name="TimeToStart" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.timeToStart"></a>

```csharp
public string TimeToStart { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.applyActionSchedule">ApplyActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.batchingStrategy">BatchingStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.collectionType">CollectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.diagnosticsCollection">DiagnosticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.executingFsuActionId">ExecutingFsuActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.fsuCollectionId">FsuCollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.goalVersionDetails">GoalVersionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isIgnoreMissingPatches">IsIgnoreMissingPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isIgnorePatches">IsIgnorePatches</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isKeepPlacement">IsKeepPlacement</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.lastCompletedAction">LastCompletedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.maxDrainTimeoutInSeconds">MaxDrainTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.nextActionToExecute">NextActionToExecute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.stageActionSchedule">StageActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeFinished">TimeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplyActionSchedule`<sup>Required</sup> <a name="ApplyActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.applyActionSchedule"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList ApplyActionSchedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList</a>

---

##### `BatchingStrategy`<sup>Required</sup> <a name="BatchingStrategy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.batchingStrategy"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList BatchingStrategy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList</a>

---

##### `CollectionType`<sup>Required</sup> <a name="CollectionType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.collectionType"></a>

```csharp
public string CollectionType { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DiagnosticsCollection`<sup>Required</sup> <a name="DiagnosticsCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.diagnosticsCollection"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList DiagnosticsCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExecutingFsuActionId`<sup>Required</sup> <a name="ExecutingFsuActionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.executingFsuActionId"></a>

```csharp
public string ExecutingFsuActionId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FsuCollectionId`<sup>Required</sup> <a name="FsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.fsuCollectionId"></a>

```csharp
public string FsuCollectionId { get; }
```

- *Type:* string

---

##### `GoalVersionDetails`<sup>Required</sup> <a name="GoalVersionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.goalVersionDetails"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList GoalVersionDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsIgnoreMissingPatches`<sup>Required</sup> <a name="IsIgnoreMissingPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isIgnoreMissingPatches"></a>

```csharp
public string[] IsIgnoreMissingPatches { get; }
```

- *Type:* string[]

---

##### `IsIgnorePatches`<sup>Required</sup> <a name="IsIgnorePatches" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isIgnorePatches"></a>

```csharp
public IResolvable IsIgnorePatches { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsKeepPlacement`<sup>Required</sup> <a name="IsKeepPlacement" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isKeepPlacement"></a>

```csharp
public IResolvable IsKeepPlacement { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastCompletedAction`<sup>Required</sup> <a name="LastCompletedAction" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.lastCompletedAction"></a>

```csharp
public string LastCompletedAction { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MaxDrainTimeoutInSeconds`<sup>Required</sup> <a name="MaxDrainTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.maxDrainTimeoutInSeconds"></a>

```csharp
public double MaxDrainTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `NextActionToExecute`<sup>Required</sup> <a name="NextActionToExecute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.nextActionToExecute"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList NextActionToExecute { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList</a>

---

##### `StageActionSchedule`<sup>Required</sup> <a name="StageActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.stageActionSchedule"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList StageActionSchedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeFinished"></a>

```csharp
public string TimeFinished { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.timeToStart">TimeToStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeToStart`<sup>Required</sup> <a name="TimeToStart" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.timeToStart"></a>

```csharp
public string TimeToStart { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.get"></a>

```csharp
private DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.items"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection</a>

---



