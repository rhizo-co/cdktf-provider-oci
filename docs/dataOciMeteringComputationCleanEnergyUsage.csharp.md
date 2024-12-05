# `dataOciMeteringComputationCleanEnergyUsage` Submodule <a name="`dataOciMeteringComputationCleanEnergyUsage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMeteringComputationCleanEnergyUsage <a name="DataOciMeteringComputationCleanEnergyUsage" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_clean_energy_usage oci_metering_computation_clean_energy_usage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationCleanEnergyUsage(Construct Scope, string Id, DataOciMeteringComputationCleanEnergyUsageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig">DataOciMeteringComputationCleanEnergyUsageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig">DataOciMeteringComputationCleanEnergyUsageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMeteringComputationCleanEnergyUsage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationCleanEnergyUsage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationCleanEnergyUsage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationCleanEnergyUsage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationCleanEnergyUsage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMeteringComputationCleanEnergyUsage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMeteringComputationCleanEnergyUsage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMeteringComputationCleanEnergyUsage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_clean_energy_usage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMeteringComputationCleanEnergyUsage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.ad">Ad</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.usage">Usage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Ad`<sup>Required</sup> <a name="Ad" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.ad"></a>

```csharp
public string Ad { get; }
```

- *Type:* string

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.usage"></a>

```csharp
public double Usage { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMeteringComputationCleanEnergyUsageConfig <a name="DataOciMeteringComputationCleanEnergyUsageConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationCleanEnergyUsageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Region,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_clean_energy_usage#region DataOciMeteringComputationCleanEnergyUsage#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_clean_energy_usage#id DataOciMeteringComputationCleanEnergyUsage#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_clean_energy_usage#region DataOciMeteringComputationCleanEnergyUsage#region}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCleanEnergyUsage.DataOciMeteringComputationCleanEnergyUsageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_clean_energy_usage#id DataOciMeteringComputationCleanEnergyUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



