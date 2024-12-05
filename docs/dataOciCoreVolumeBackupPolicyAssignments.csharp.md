# `dataOciCoreVolumeBackupPolicyAssignments` Submodule <a name="`dataOciCoreVolumeBackupPolicyAssignments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVolumeBackupPolicyAssignments <a name="DataOciCoreVolumeBackupPolicyAssignments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments oci_core_volume_backup_policy_assignments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVolumeBackupPolicyAssignments(Construct Scope, string Id, DataOciCoreVolumeBackupPolicyAssignmentsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig">DataOciCoreVolumeBackupPolicyAssignmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig">DataOciCoreVolumeBackupPolicyAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVolumeBackupPolicyAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreVolumeBackupPolicyAssignments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreVolumeBackupPolicyAssignments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreVolumeBackupPolicyAssignments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreVolumeBackupPolicyAssignments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreVolumeBackupPolicyAssignments resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreVolumeBackupPolicyAssignments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreVolumeBackupPolicyAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVolumeBackupPolicyAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList">DataOciCoreVolumeBackupPolicyAssignmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.volumeBackupPolicyAssignments">VolumeBackupPolicyAssignments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList">DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.assetIdInput">AssetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.assetId">AssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.filter"></a>

```csharp
public DataOciCoreVolumeBackupPolicyAssignmentsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList">DataOciCoreVolumeBackupPolicyAssignmentsFilterList</a>

---

##### `VolumeBackupPolicyAssignments`<sup>Required</sup> <a name="VolumeBackupPolicyAssignments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.volumeBackupPolicyAssignments"></a>

```csharp
public DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList VolumeBackupPolicyAssignments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList">DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList</a>

---

##### `AssetIdInput`<sup>Optional</sup> <a name="AssetIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.assetIdInput"></a>

```csharp
public string AssetIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.assetId"></a>

```csharp
public string AssetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVolumeBackupPolicyAssignmentsConfig <a name="DataOciCoreVolumeBackupPolicyAssignmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVolumeBackupPolicyAssignmentsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AssetId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.assetId">AssetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#asset_id DataOciCoreVolumeBackupPolicyAssignments#asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#id DataOciCoreVolumeBackupPolicyAssignments#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.assetId"></a>

```csharp
public string AssetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#asset_id DataOciCoreVolumeBackupPolicyAssignments#asset_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#filter DataOciCoreVolumeBackupPolicyAssignments#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#id DataOciCoreVolumeBackupPolicyAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreVolumeBackupPolicyAssignmentsFilter <a name="DataOciCoreVolumeBackupPolicyAssignmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVolumeBackupPolicyAssignmentsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#name DataOciCoreVolumeBackupPolicyAssignments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#values DataOciCoreVolumeBackupPolicyAssignments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#regex DataOciCoreVolumeBackupPolicyAssignments#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#name DataOciCoreVolumeBackupPolicyAssignments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#values DataOciCoreVolumeBackupPolicyAssignments#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#regex DataOciCoreVolumeBackupPolicyAssignments#regex}.

---

### DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments <a name="DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVolumeBackupPolicyAssignmentsFilterList <a name="DataOciCoreVolumeBackupPolicyAssignmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVolumeBackupPolicyAssignmentsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.get"></a>

```csharp
private DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference <a name="DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList <a name="DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.get"></a>

```csharp
private DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference <a name="DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.assetId">AssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.xrcKmsKeyId">XrcKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments">DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.assetId"></a>

```csharp
public string AssetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `XrcKmsKeyId`<sup>Required</sup> <a name="XrcKmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.xrcKmsKeyId"></a>

```csharp
public string XrcKmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments">DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments</a>

---



