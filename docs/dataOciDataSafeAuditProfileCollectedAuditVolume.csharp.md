# `dataOciDataSafeAuditProfileCollectedAuditVolume` Submodule <a name="`dataOciDataSafeAuditProfileCollectedAuditVolume` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditProfileCollectedAuditVolume <a name="DataOciDataSafeAuditProfileCollectedAuditVolume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume oci_data_safe_audit_profile_collected_audit_volume}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolume(Construct Scope, string Id, DataOciDataSafeAuditProfileCollectedAuditVolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig">DataOciDataSafeAuditProfileCollectedAuditVolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig">DataOciDataSafeAuditProfileCollectedAuditVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.resetMonthInConsiderationGreaterThan">ResetMonthInConsiderationGreaterThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.resetMonthInConsiderationLessThan">ResetMonthInConsiderationLessThan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMonthInConsiderationGreaterThan` <a name="ResetMonthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.resetMonthInConsiderationGreaterThan"></a>

```csharp
private void ResetMonthInConsiderationGreaterThan()
```

##### `ResetMonthInConsiderationLessThan` <a name="ResetMonthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.resetMonthInConsiderationLessThan"></a>

```csharp
private void ResetMonthInConsiderationLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditProfileCollectedAuditVolume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeAuditProfileCollectedAuditVolume.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeAuditProfileCollectedAuditVolume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeAuditProfileCollectedAuditVolume.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeAuditProfileCollectedAuditVolume.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeAuditProfileCollectedAuditVolume resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeAuditProfileCollectedAuditVolume to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeAuditProfileCollectedAuditVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditProfileCollectedAuditVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList">DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.auditProfileIdInput">AuditProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.monthInConsiderationGreaterThanInput">MonthInConsiderationGreaterThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.monthInConsiderationLessThanInput">MonthInConsiderationLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.workRequestIdInput">WorkRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.auditProfileId">AuditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.monthInConsiderationGreaterThan">MonthInConsiderationGreaterThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.monthInConsiderationLessThan">MonthInConsiderationLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.workRequestId">WorkRequestId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.items"></a>

```csharp
public DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList">DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList</a>

---

##### `AuditProfileIdInput`<sup>Optional</sup> <a name="AuditProfileIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.auditProfileIdInput"></a>

```csharp
public string AuditProfileIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MonthInConsiderationGreaterThanInput`<sup>Optional</sup> <a name="MonthInConsiderationGreaterThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.monthInConsiderationGreaterThanInput"></a>

```csharp
public string MonthInConsiderationGreaterThanInput { get; }
```

- *Type:* string

---

##### `MonthInConsiderationLessThanInput`<sup>Optional</sup> <a name="MonthInConsiderationLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.monthInConsiderationLessThanInput"></a>

```csharp
public string MonthInConsiderationLessThanInput { get; }
```

- *Type:* string

---

##### `WorkRequestIdInput`<sup>Optional</sup> <a name="WorkRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.workRequestIdInput"></a>

```csharp
public string WorkRequestIdInput { get; }
```

- *Type:* string

---

##### `AuditProfileId`<sup>Required</sup> <a name="AuditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.auditProfileId"></a>

```csharp
public string AuditProfileId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MonthInConsiderationGreaterThan`<sup>Required</sup> <a name="MonthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.monthInConsiderationGreaterThan"></a>

```csharp
public string MonthInConsiderationGreaterThan { get; }
```

- *Type:* string

---

##### `MonthInConsiderationLessThan`<sup>Required</sup> <a name="MonthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.monthInConsiderationLessThan"></a>

```csharp
public string MonthInConsiderationLessThan { get; }
```

- *Type:* string

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.workRequestId"></a>

```csharp
public string WorkRequestId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditProfileCollectedAuditVolumeConfig <a name="DataOciDataSafeAuditProfileCollectedAuditVolumeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuditProfileId,
    string WorkRequestId,
    string Id = null,
    string MonthInConsiderationGreaterThan = null,
    string MonthInConsiderationLessThan = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.auditProfileId">AuditProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#audit_profile_id DataOciDataSafeAuditProfileCollectedAuditVolume#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.workRequestId">WorkRequestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#work_request_id DataOciDataSafeAuditProfileCollectedAuditVolume#work_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#id DataOciDataSafeAuditProfileCollectedAuditVolume#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.monthInConsiderationGreaterThan">MonthInConsiderationGreaterThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#month_in_consideration_greater_than DataOciDataSafeAuditProfileCollectedAuditVolume#month_in_consideration_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.monthInConsiderationLessThan">MonthInConsiderationLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#month_in_consideration_less_than DataOciDataSafeAuditProfileCollectedAuditVolume#month_in_consideration_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuditProfileId`<sup>Required</sup> <a name="AuditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.auditProfileId"></a>

```csharp
public string AuditProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#audit_profile_id DataOciDataSafeAuditProfileCollectedAuditVolume#audit_profile_id}.

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.workRequestId"></a>

```csharp
public string WorkRequestId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#work_request_id DataOciDataSafeAuditProfileCollectedAuditVolume#work_request_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#id DataOciDataSafeAuditProfileCollectedAuditVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MonthInConsiderationGreaterThan`<sup>Optional</sup> <a name="MonthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.monthInConsiderationGreaterThan"></a>

```csharp
public string MonthInConsiderationGreaterThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#month_in_consideration_greater_than DataOciDataSafeAuditProfileCollectedAuditVolume#month_in_consideration_greater_than}.

---

##### `MonthInConsiderationLessThan`<sup>Optional</sup> <a name="MonthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.monthInConsiderationLessThan"></a>

```csharp
public string MonthInConsiderationLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#month_in_consideration_less_than DataOciDataSafeAuditProfileCollectedAuditVolume#month_in_consideration_less_than}.

---

### DataOciDataSafeAuditProfileCollectedAuditVolumeItems <a name="DataOciDataSafeAuditProfileCollectedAuditVolumeItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumeItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList <a name="DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.get"></a>

```csharp
private DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference <a name="DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.archivedVolume">ArchivedVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.auditProfileId">AuditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.monthInConsideration">MonthInConsideration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.onlineVolume">OnlineVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItems">DataOciDataSafeAuditProfileCollectedAuditVolumeItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchivedVolume`<sup>Required</sup> <a name="ArchivedVolume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.archivedVolume"></a>

```csharp
public string ArchivedVolume { get; }
```

- *Type:* string

---

##### `AuditProfileId`<sup>Required</sup> <a name="AuditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.auditProfileId"></a>

```csharp
public string AuditProfileId { get; }
```

- *Type:* string

---

##### `MonthInConsideration`<sup>Required</sup> <a name="MonthInConsideration" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.monthInConsideration"></a>

```csharp
public string MonthInConsideration { get; }
```

- *Type:* string

---

##### `OnlineVolume`<sup>Required</sup> <a name="OnlineVolume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.onlineVolume"></a>

```csharp
public string OnlineVolume { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeAuditProfileCollectedAuditVolumeItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItems">DataOciDataSafeAuditProfileCollectedAuditVolumeItems</a>

---



