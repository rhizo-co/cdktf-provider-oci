# `dataOciComputeCloudAtCustomerCccUpgradeSchedule` Submodule <a name="`dataOciComputeCloudAtCustomerCccUpgradeSchedule` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeCloudAtCustomerCccUpgradeSchedule <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedule" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedule oci_compute_cloud_at_customer_ccc_upgrade_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeSchedule(Construct Scope, string Id, DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig">DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig">DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccUpgradeSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeCloudAtCustomerCccUpgradeSchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeCloudAtCustomerCccUpgradeSchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeCloudAtCustomerCccUpgradeSchedule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeCloudAtCustomerCccUpgradeSchedule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccUpgradeSchedule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciComputeCloudAtCustomerCccUpgradeSchedule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciComputeCloudAtCustomerCccUpgradeSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeCloudAtCustomerCccUpgradeSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.events">Events</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList">DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.infrastructureIds">InfrastructureIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.cccUpgradeScheduleIdInput">CccUpgradeScheduleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.cccUpgradeScheduleId">CccUpgradeScheduleId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Events`<sup>Required</sup> <a name="Events" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.events"></a>

```csharp
public DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList Events { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList">DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfrastructureIds`<sup>Required</sup> <a name="InfrastructureIds" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.infrastructureIds"></a>

```csharp
public string[] InfrastructureIds { get; }
```

- *Type:* string[]

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CccUpgradeScheduleIdInput`<sup>Optional</sup> <a name="CccUpgradeScheduleIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.cccUpgradeScheduleIdInput"></a>

```csharp
public string CccUpgradeScheduleIdInput { get; }
```

- *Type:* string

---

##### `CccUpgradeScheduleId`<sup>Required</sup> <a name="CccUpgradeScheduleId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.cccUpgradeScheduleId"></a>

```csharp
public string CccUpgradeScheduleId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig <a name="DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CccUpgradeScheduleId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.cccUpgradeScheduleId">CccUpgradeScheduleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedule#ccc_upgrade_schedule_id DataOciComputeCloudAtCustomerCccUpgradeSchedule#ccc_upgrade_schedule_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CccUpgradeScheduleId`<sup>Required</sup> <a name="CccUpgradeScheduleId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.cccUpgradeScheduleId"></a>

```csharp
public string CccUpgradeScheduleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedule#ccc_upgrade_schedule_id DataOciComputeCloudAtCustomerCccUpgradeSchedule#ccc_upgrade_schedule_id}.

---

### DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents <a name="DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList <a name="DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference <a name="DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventDuration">ScheduleEventDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventRecurrences">ScheduleEventRecurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents">DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScheduleEventDuration`<sup>Required</sup> <a name="ScheduleEventDuration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventDuration"></a>

```csharp
public string ScheduleEventDuration { get; }
```

- *Type:* string

---

##### `ScheduleEventRecurrences`<sup>Required</sup> <a name="ScheduleEventRecurrences" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventRecurrences"></a>

```csharp
public string ScheduleEventRecurrences { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents">DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents</a>

---



