# `dataOciManagementAgentManagementAgentAvailableHistories` Submodule <a name="`dataOciManagementAgentManagementAgentAvailableHistories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementAgentManagementAgentAvailableHistories <a name="DataOciManagementAgentManagementAgentAvailableHistories" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories oci_management_agent_management_agent_available_histories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentAvailableHistories(Construct Scope, string Id, DataOciManagementAgentManagementAgentAvailableHistoriesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig">DataOciManagementAgentManagementAgentAvailableHistoriesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig">DataOciManagementAgentManagementAgentAvailableHistoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusEndedGreaterThan">ResetTimeAvailabilityStatusEndedGreaterThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusStartedLessThan">ResetTimeAvailabilityStatusStartedLessThan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeAvailabilityStatusEndedGreaterThan` <a name="ResetTimeAvailabilityStatusEndedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusEndedGreaterThan"></a>

```csharp
private void ResetTimeAvailabilityStatusEndedGreaterThan()
```

##### `ResetTimeAvailabilityStatusStartedLessThan` <a name="ResetTimeAvailabilityStatusStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusStartedLessThan"></a>

```csharp
private void ResetTimeAvailabilityStatusStartedLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciManagementAgentManagementAgentAvailableHistories resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciManagementAgentManagementAgentAvailableHistories.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciManagementAgentManagementAgentAvailableHistories.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciManagementAgentManagementAgentAvailableHistories.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciManagementAgentManagementAgentAvailableHistories.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciManagementAgentManagementAgentAvailableHistories resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciManagementAgentManagementAgentAvailableHistories to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciManagementAgentManagementAgentAvailableHistories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementAgentManagementAgentAvailableHistories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.availabilityHistories">AvailabilityHistories</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList">DataOciManagementAgentManagementAgentAvailableHistoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentIdInput">ManagementAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThanInput">TimeAvailabilityStatusEndedGreaterThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThanInput">TimeAvailabilityStatusStartedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThan">TimeAvailabilityStatusEndedGreaterThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThan">TimeAvailabilityStatusStartedLessThan</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AvailabilityHistories`<sup>Required</sup> <a name="AvailabilityHistories" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.availabilityHistories"></a>

```csharp
public DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList AvailabilityHistories { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filter"></a>

```csharp
public DataOciManagementAgentManagementAgentAvailableHistoriesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList">DataOciManagementAgentManagementAgentAvailableHistoriesFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagementAgentIdInput`<sup>Optional</sup> <a name="ManagementAgentIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentIdInput"></a>

```csharp
public string ManagementAgentIdInput { get; }
```

- *Type:* string

---

##### `TimeAvailabilityStatusEndedGreaterThanInput`<sup>Optional</sup> <a name="TimeAvailabilityStatusEndedGreaterThanInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThanInput"></a>

```csharp
public string TimeAvailabilityStatusEndedGreaterThanInput { get; }
```

- *Type:* string

---

##### `TimeAvailabilityStatusStartedLessThanInput`<sup>Optional</sup> <a name="TimeAvailabilityStatusStartedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThanInput"></a>

```csharp
public string TimeAvailabilityStatusStartedLessThanInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; }
```

- *Type:* string

---

##### `TimeAvailabilityStatusEndedGreaterThan`<sup>Required</sup> <a name="TimeAvailabilityStatusEndedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThan"></a>

```csharp
public string TimeAvailabilityStatusEndedGreaterThan { get; }
```

- *Type:* string

---

##### `TimeAvailabilityStatusStartedLessThan`<sup>Required</sup> <a name="TimeAvailabilityStatusStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThan"></a>

```csharp
public string TimeAvailabilityStatusStartedLessThan { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories <a name="DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories {

};
```


### DataOciManagementAgentManagementAgentAvailableHistoriesConfig <a name="DataOciManagementAgentManagementAgentAvailableHistoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentAvailableHistoriesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagementAgentId,
    object Filter = null,
    string Id = null,
    string TimeAvailabilityStatusEndedGreaterThan = null,
    string TimeAvailabilityStatusStartedLessThan = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#management_agent_id DataOciManagementAgentManagementAgentAvailableHistories#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#id DataOciManagementAgentManagementAgentAvailableHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusEndedGreaterThan">TimeAvailabilityStatusEndedGreaterThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_ended_greater_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_ended_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusStartedLessThan">TimeAvailabilityStatusStartedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_started_less_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_started_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#management_agent_id DataOciManagementAgentManagementAgentAvailableHistories#management_agent_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#filter DataOciManagementAgentManagementAgentAvailableHistories#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#id DataOciManagementAgentManagementAgentAvailableHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeAvailabilityStatusEndedGreaterThan`<sup>Optional</sup> <a name="TimeAvailabilityStatusEndedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusEndedGreaterThan"></a>

```csharp
public string TimeAvailabilityStatusEndedGreaterThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_ended_greater_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_ended_greater_than}.

---

##### `TimeAvailabilityStatusStartedLessThan`<sup>Optional</sup> <a name="TimeAvailabilityStatusStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusStartedLessThan"></a>

```csharp
public string TimeAvailabilityStatusStartedLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_started_less_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_started_less_than}.

---

### DataOciManagementAgentManagementAgentAvailableHistoriesFilter <a name="DataOciManagementAgentManagementAgentAvailableHistoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentAvailableHistoriesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#name DataOciManagementAgentManagementAgentAvailableHistories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#values DataOciManagementAgentManagementAgentAvailableHistories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#regex DataOciManagementAgentManagementAgentAvailableHistories#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#name DataOciManagementAgentManagementAgentAvailableHistories#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#values DataOciManagementAgentManagementAgentAvailableHistories#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#regex DataOciManagementAgentManagementAgentAvailableHistories#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList <a name="DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.get"></a>

```csharp
private DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference <a name="DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.availabilityStatus">AvailabilityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusEnded">TimeAvailabilityStatusEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusStarted">TimeAvailabilityStatusStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityStatus`<sup>Required</sup> <a name="AvailabilityStatus" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.availabilityStatus"></a>

```csharp
public string AvailabilityStatus { get; }
```

- *Type:* string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; }
```

- *Type:* string

---

##### `TimeAvailabilityStatusEnded`<sup>Required</sup> <a name="TimeAvailabilityStatusEnded" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusEnded"></a>

```csharp
public string TimeAvailabilityStatusEnded { get; }
```

- *Type:* string

---

##### `TimeAvailabilityStatusStarted`<sup>Required</sup> <a name="TimeAvailabilityStatusStarted" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusStarted"></a>

```csharp
public string TimeAvailabilityStatusStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.internalValue"></a>

```csharp
public DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories</a>

---


### DataOciManagementAgentManagementAgentAvailableHistoriesFilterList <a name="DataOciManagementAgentManagementAgentAvailableHistoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentAvailableHistoriesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.get"></a>

```csharp
private DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference <a name="DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



