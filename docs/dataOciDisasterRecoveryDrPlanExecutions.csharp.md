# `dataOciDisasterRecoveryDrPlanExecutions` Submodule <a name="`dataOciDisasterRecoveryDrPlanExecutions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDisasterRecoveryDrPlanExecutions <a name="DataOciDisasterRecoveryDrPlanExecutions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions oci_disaster_recovery_dr_plan_executions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutions(Construct Scope, string Id, DataOciDisasterRecoveryDrPlanExecutionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig">DataOciDisasterRecoveryDrPlanExecutionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig">DataOciDisasterRecoveryDrPlanExecutionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetDrPlanExecutionId">ResetDrPlanExecutionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDrPlanExecutionId` <a name="ResetDrPlanExecutionId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetDrPlanExecutionId"></a>

```csharp
private void ResetDrPlanExecutionId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDisasterRecoveryDrPlanExecutions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDisasterRecoveryDrPlanExecutions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDisasterRecoveryDrPlanExecutions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDisasterRecoveryDrPlanExecutions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDisasterRecoveryDrPlanExecutions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDisasterRecoveryDrPlanExecutions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDisasterRecoveryDrPlanExecutions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDisasterRecoveryDrPlanExecutions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDisasterRecoveryDrPlanExecutions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drPlanExecutionCollection">DrPlanExecutionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList">DataOciDisasterRecoveryDrPlanExecutionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drPlanExecutionIdInput">DrPlanExecutionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drProtectionGroupIdInput">DrProtectionGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drPlanExecutionId">DrPlanExecutionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DrPlanExecutionCollection`<sup>Required</sup> <a name="DrPlanExecutionCollection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drPlanExecutionCollection"></a>

```csharp
public DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList DrPlanExecutionCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.filter"></a>

```csharp
public DataOciDisasterRecoveryDrPlanExecutionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList">DataOciDisasterRecoveryDrPlanExecutionsFilterList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DrPlanExecutionIdInput`<sup>Optional</sup> <a name="DrPlanExecutionIdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drPlanExecutionIdInput"></a>

```csharp
public string DrPlanExecutionIdInput { get; }
```

- *Type:* string

---

##### `DrProtectionGroupIdInput`<sup>Optional</sup> <a name="DrProtectionGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drProtectionGroupIdInput"></a>

```csharp
public string DrProtectionGroupIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DrPlanExecutionId`<sup>Required</sup> <a name="DrPlanExecutionId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drPlanExecutionId"></a>

```csharp
public string DrPlanExecutionId { get; }
```

- *Type:* string

---

##### `DrProtectionGroupId`<sup>Required</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drProtectionGroupId"></a>

```csharp
public string DrProtectionGroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDisasterRecoveryDrPlanExecutionsConfig <a name="DataOciDisasterRecoveryDrPlanExecutionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DrProtectionGroupId,
    string DisplayName = null,
    string DrPlanExecutionId = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#dr_protection_group_id DataOciDisasterRecoveryDrPlanExecutions#dr_protection_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#display_name DataOciDisasterRecoveryDrPlanExecutions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.drPlanExecutionId">DrPlanExecutionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#dr_plan_execution_id DataOciDisasterRecoveryDrPlanExecutions#dr_plan_execution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#id DataOciDisasterRecoveryDrPlanExecutions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#state DataOciDisasterRecoveryDrPlanExecutions#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DrProtectionGroupId`<sup>Required</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.drProtectionGroupId"></a>

```csharp
public string DrProtectionGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#dr_protection_group_id DataOciDisasterRecoveryDrPlanExecutions#dr_protection_group_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#display_name DataOciDisasterRecoveryDrPlanExecutions#display_name}.

---

##### `DrPlanExecutionId`<sup>Optional</sup> <a name="DrPlanExecutionId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.drPlanExecutionId"></a>

```csharp
public string DrPlanExecutionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#dr_plan_execution_id DataOciDisasterRecoveryDrPlanExecutions#dr_plan_execution_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#filter DataOciDisasterRecoveryDrPlanExecutions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#id DataOciDisasterRecoveryDrPlanExecutions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#state DataOciDisasterRecoveryDrPlanExecutions#state}.

---

### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection {

};
```


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems {

};
```


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions {

};
```


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions {

};
```


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions {

};
```


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation {

};
```


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation {

};
```


### DataOciDisasterRecoveryDrPlanExecutionsFilter <a name="DataOciDisasterRecoveryDrPlanExecutionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#name DataOciDisasterRecoveryDrPlanExecutions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#values DataOciDisasterRecoveryDrPlanExecutions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#regex DataOciDisasterRecoveryDrPlanExecutions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#name DataOciDisasterRecoveryDrPlanExecutions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#values DataOciDisasterRecoveryDrPlanExecutions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#regex DataOciDisasterRecoveryDrPlanExecutions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.get"></a>

```csharp
private DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.arePrechecksEnabled">ArePrechecksEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.areWarningsIgnored">AreWarningsIgnored</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.planExecutionType">PlanExecutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArePrechecksEnabled`<sup>Required</sup> <a name="ArePrechecksEnabled" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.arePrechecksEnabled"></a>

```csharp
public IResolvable ArePrechecksEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AreWarningsIgnored`<sup>Required</sup> <a name="AreWarningsIgnored" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.areWarningsIgnored"></a>

```csharp
public IResolvable AreWarningsIgnored { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PlanExecutionType`<sup>Required</sup> <a name="PlanExecutionType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.planExecutionType"></a>

```csharp
public string PlanExecutionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.internalValue"></a>

```csharp
public DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions</a>

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.get"></a>

```csharp
private DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.executionDurationInSec">ExecutionDurationInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.statusDetails">StatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.stepExecutions">StepExecutions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExecutionDurationInSec`<sup>Required</sup> <a name="ExecutionDurationInSec" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.executionDurationInSec"></a>

```csharp
public double ExecutionDurationInSec { get; }
```

- *Type:* double

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.statusDetails"></a>

```csharp
public string StatusDetails { get; }
```

- *Type:* string

---

##### `StepExecutions`<sup>Required</sup> <a name="StepExecutions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.stepExecutions"></a>

```csharp
public DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList StepExecutions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList</a>

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.internalValue"></a>

```csharp
public DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions</a>

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.get"></a>

```csharp
private DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.get"></a>

```csharp
private DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.internalValue"></a>

```csharp
public DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation</a>

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.executionDurationInSec">ExecutionDurationInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.logLocation">LogLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.statusDetails">StatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.stepId">StepId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExecutionDurationInSec`<sup>Required</sup> <a name="ExecutionDurationInSec" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.executionDurationInSec"></a>

```csharp
public double ExecutionDurationInSec { get; }
```

- *Type:* double

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `LogLocation`<sup>Required</sup> <a name="LogLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.logLocation"></a>

```csharp
public DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList LogLocation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.statusDetails"></a>

```csharp
public string StatusDetails { get; }
```

- *Type:* string

---

##### `StepId`<sup>Required</sup> <a name="StepId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.stepId"></a>

```csharp
public string StepId { get; }
```

- *Type:* string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.internalValue"></a>

```csharp
public DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions</a>

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.get"></a>

```csharp
private DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.get"></a>

```csharp
private DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.internalValue"></a>

```csharp
public DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation</a>

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.executionDurationInSec">ExecutionDurationInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.executionOptions">ExecutionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.groupExecutions">GroupExecutions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.lifeCycleDetails">LifeCycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.logLocation">LogLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.peerDrProtectionGroupId">PeerDrProtectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.peerRegion">PeerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.planExecutionType">PlanExecutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.planId">PlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DrProtectionGroupId`<sup>Required</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.drProtectionGroupId"></a>

```csharp
public string DrProtectionGroupId { get; }
```

- *Type:* string

---

##### `ExecutionDurationInSec`<sup>Required</sup> <a name="ExecutionDurationInSec" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.executionDurationInSec"></a>

```csharp
public double ExecutionDurationInSec { get; }
```

- *Type:* double

---

##### `ExecutionOptions`<sup>Required</sup> <a name="ExecutionOptions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.executionOptions"></a>

```csharp
public DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList ExecutionOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GroupExecutions`<sup>Required</sup> <a name="GroupExecutions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.groupExecutions"></a>

```csharp
public DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList GroupExecutions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifeCycleDetails`<sup>Required</sup> <a name="LifeCycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.lifeCycleDetails"></a>

```csharp
public string LifeCycleDetails { get; }
```

- *Type:* string

---

##### `LogLocation`<sup>Required</sup> <a name="LogLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.logLocation"></a>

```csharp
public DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList LogLocation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList</a>

---

##### `PeerDrProtectionGroupId`<sup>Required</sup> <a name="PeerDrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.peerDrProtectionGroupId"></a>

```csharp
public string PeerDrProtectionGroupId { get; }
```

- *Type:* string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.peerRegion"></a>

```csharp
public string PeerRegion { get; }
```

- *Type:* string

---

##### `PlanExecutionType`<sup>Required</sup> <a name="PlanExecutionType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.planExecutionType"></a>

```csharp
public string PlanExecutionType { get; }
```

- *Type:* string

---

##### `PlanId`<sup>Required</sup> <a name="PlanId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.planId"></a>

```csharp
public string PlanId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems</a>

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.get"></a>

```csharp
private DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.property.items"></a>

```csharp
public DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection</a>

---


### DataOciDisasterRecoveryDrPlanExecutionsFilterList <a name="DataOciDisasterRecoveryDrPlanExecutionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.get"></a>

```csharp
private DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



