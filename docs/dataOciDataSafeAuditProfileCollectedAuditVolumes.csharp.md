# `dataOciDataSafeAuditProfileCollectedAuditVolumes` Submodule <a name="`dataOciDataSafeAuditProfileCollectedAuditVolumes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditProfileCollectedAuditVolumes <a name="DataOciDataSafeAuditProfileCollectedAuditVolumes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes oci_data_safe_audit_profile_collected_audit_volumes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumes(Construct Scope, string Id, DataOciDataSafeAuditProfileCollectedAuditVolumesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig">DataOciDataSafeAuditProfileCollectedAuditVolumesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig">DataOciDataSafeAuditProfileCollectedAuditVolumesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetMonthInConsiderationGreaterThan">ResetMonthInConsiderationGreaterThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetMonthInConsiderationLessThan">ResetMonthInConsiderationLessThan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMonthInConsiderationGreaterThan` <a name="ResetMonthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetMonthInConsiderationGreaterThan"></a>

```csharp
private void ResetMonthInConsiderationGreaterThan()
```

##### `ResetMonthInConsiderationLessThan` <a name="ResetMonthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetMonthInConsiderationLessThan"></a>

```csharp
private void ResetMonthInConsiderationLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditProfileCollectedAuditVolumes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeAuditProfileCollectedAuditVolumes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeAuditProfileCollectedAuditVolumes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeAuditProfileCollectedAuditVolumes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeAuditProfileCollectedAuditVolumes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeAuditProfileCollectedAuditVolumes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeAuditProfileCollectedAuditVolumes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeAuditProfileCollectedAuditVolumes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditProfileCollectedAuditVolumes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.collectedAuditVolumeCollection">CollectedAuditVolumeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList">DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.auditProfileIdInput">AuditProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.monthInConsiderationGreaterThanInput">MonthInConsiderationGreaterThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.monthInConsiderationLessThanInput">MonthInConsiderationLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.workRequestIdInput">WorkRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.auditProfileId">AuditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.monthInConsiderationGreaterThan">MonthInConsiderationGreaterThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.monthInConsiderationLessThan">MonthInConsiderationLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.workRequestId">WorkRequestId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CollectedAuditVolumeCollection`<sup>Required</sup> <a name="CollectedAuditVolumeCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.collectedAuditVolumeCollection"></a>

```csharp
public DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList CollectedAuditVolumeCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.filter"></a>

```csharp
public DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList">DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList</a>

---

##### `AuditProfileIdInput`<sup>Optional</sup> <a name="AuditProfileIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.auditProfileIdInput"></a>

```csharp
public string AuditProfileIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MonthInConsiderationGreaterThanInput`<sup>Optional</sup> <a name="MonthInConsiderationGreaterThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.monthInConsiderationGreaterThanInput"></a>

```csharp
public string MonthInConsiderationGreaterThanInput { get; }
```

- *Type:* string

---

##### `MonthInConsiderationLessThanInput`<sup>Optional</sup> <a name="MonthInConsiderationLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.monthInConsiderationLessThanInput"></a>

```csharp
public string MonthInConsiderationLessThanInput { get; }
```

- *Type:* string

---

##### `WorkRequestIdInput`<sup>Optional</sup> <a name="WorkRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.workRequestIdInput"></a>

```csharp
public string WorkRequestIdInput { get; }
```

- *Type:* string

---

##### `AuditProfileId`<sup>Required</sup> <a name="AuditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.auditProfileId"></a>

```csharp
public string AuditProfileId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MonthInConsiderationGreaterThan`<sup>Required</sup> <a name="MonthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.monthInConsiderationGreaterThan"></a>

```csharp
public string MonthInConsiderationGreaterThan { get; }
```

- *Type:* string

---

##### `MonthInConsiderationLessThan`<sup>Required</sup> <a name="MonthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.monthInConsiderationLessThan"></a>

```csharp
public string MonthInConsiderationLessThan { get; }
```

- *Type:* string

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.workRequestId"></a>

```csharp
public string WorkRequestId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection {

};
```


### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems {

};
```


### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems {

};
```


### DataOciDataSafeAuditProfileCollectedAuditVolumesConfig <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuditProfileId,
    string WorkRequestId,
    object Filter = null,
    string Id = null,
    string MonthInConsiderationGreaterThan = null,
    string MonthInConsiderationLessThan = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.auditProfileId">AuditProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#audit_profile_id DataOciDataSafeAuditProfileCollectedAuditVolumes#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.workRequestId">WorkRequestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#work_request_id DataOciDataSafeAuditProfileCollectedAuditVolumes#work_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#id DataOciDataSafeAuditProfileCollectedAuditVolumes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.monthInConsiderationGreaterThan">MonthInConsiderationGreaterThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#month_in_consideration_greater_than DataOciDataSafeAuditProfileCollectedAuditVolumes#month_in_consideration_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.monthInConsiderationLessThan">MonthInConsiderationLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#month_in_consideration_less_than DataOciDataSafeAuditProfileCollectedAuditVolumes#month_in_consideration_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuditProfileId`<sup>Required</sup> <a name="AuditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.auditProfileId"></a>

```csharp
public string AuditProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#audit_profile_id DataOciDataSafeAuditProfileCollectedAuditVolumes#audit_profile_id}.

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.workRequestId"></a>

```csharp
public string WorkRequestId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#work_request_id DataOciDataSafeAuditProfileCollectedAuditVolumes#work_request_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#filter DataOciDataSafeAuditProfileCollectedAuditVolumes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#id DataOciDataSafeAuditProfileCollectedAuditVolumes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MonthInConsiderationGreaterThan`<sup>Optional</sup> <a name="MonthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.monthInConsiderationGreaterThan"></a>

```csharp
public string MonthInConsiderationGreaterThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#month_in_consideration_greater_than DataOciDataSafeAuditProfileCollectedAuditVolumes#month_in_consideration_greater_than}.

---

##### `MonthInConsiderationLessThan`<sup>Optional</sup> <a name="MonthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.monthInConsiderationLessThan"></a>

```csharp
public string MonthInConsiderationLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#month_in_consideration_less_than DataOciDataSafeAuditProfileCollectedAuditVolumes#month_in_consideration_less_than}.

---

### DataOciDataSafeAuditProfileCollectedAuditVolumesFilter <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#name DataOciDataSafeAuditProfileCollectedAuditVolumes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#values DataOciDataSafeAuditProfileCollectedAuditVolumes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#regex DataOciDataSafeAuditProfileCollectedAuditVolumes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#name DataOciDataSafeAuditProfileCollectedAuditVolumes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#values DataOciDataSafeAuditProfileCollectedAuditVolumes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#regex DataOciDataSafeAuditProfileCollectedAuditVolumes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.get"></a>

```csharp
private DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.archivedVolume">ArchivedVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.auditProfileId">AuditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.monthInConsideration">MonthInConsideration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.onlineVolume">OnlineVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchivedVolume`<sup>Required</sup> <a name="ArchivedVolume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.archivedVolume"></a>

```csharp
public string ArchivedVolume { get; }
```

- *Type:* string

---

##### `AuditProfileId`<sup>Required</sup> <a name="AuditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.auditProfileId"></a>

```csharp
public string AuditProfileId { get; }
```

- *Type:* string

---

##### `MonthInConsideration`<sup>Required</sup> <a name="MonthInConsideration" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.monthInConsideration"></a>

```csharp
public string MonthInConsideration { get; }
```

- *Type:* string

---

##### `OnlineVolume`<sup>Required</sup> <a name="OnlineVolume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.onlineVolume"></a>

```csharp
public string OnlineVolume { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems</a>

---


### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.property.items"></a>

```csharp
public DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems</a>

---


### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.get"></a>

```csharp
private DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection</a>

---


### DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.get"></a>

```csharp
private DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



