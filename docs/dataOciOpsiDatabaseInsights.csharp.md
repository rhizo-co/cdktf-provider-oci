# `dataOciOpsiDatabaseInsights` Submodule <a name="`dataOciOpsiDatabaseInsights` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiDatabaseInsights <a name="DataOciOpsiDatabaseInsights" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights oci_opsi_database_insights}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsights(Construct Scope, string Id, DataOciOpsiDatabaseInsightsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig">DataOciOpsiDatabaseInsightsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig">DataOciOpsiDatabaseInsightsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetDatabaseId">ResetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetDatabaseType">ResetDatabaseType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetEnterpriseManagerBridgeId">ResetEnterpriseManagerBridgeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetExadataInsightId">ResetExadataInsightId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetOpsiPrivateEndpointId">ResetOpsiPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetDatabaseId"></a>

```csharp
private void ResetDatabaseId()
```

##### `ResetDatabaseType` <a name="ResetDatabaseType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetDatabaseType"></a>

```csharp
private void ResetDatabaseType()
```

##### `ResetEnterpriseManagerBridgeId` <a name="ResetEnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetEnterpriseManagerBridgeId"></a>

```csharp
private void ResetEnterpriseManagerBridgeId()
```

##### `ResetExadataInsightId` <a name="ResetExadataInsightId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetExadataInsightId"></a>

```csharp
private void ResetExadataInsightId()
```

##### `ResetFields` <a name="ResetFields" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetFields"></a>

```csharp
private void ResetFields()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOpsiPrivateEndpointId` <a name="ResetOpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetOpsiPrivateEndpointId"></a>

```csharp
private void ResetOpsiPrivateEndpointId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiDatabaseInsights resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiDatabaseInsights.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiDatabaseInsights.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiDatabaseInsights.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpsiDatabaseInsights.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOpsiDatabaseInsights resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiDatabaseInsights to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiDatabaseInsights that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiDatabaseInsights to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseInsightsCollection">DatabaseInsightsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList">DataOciOpsiDatabaseInsightsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseTypeInput">DatabaseTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.enterpriseManagerBridgeIdInput">EnterpriseManagerBridgeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.exadataInsightIdInput">ExadataInsightIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fieldsInput">FieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.opsiPrivateEndpointIdInput">OpsiPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.stateInput">StateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.statusInput">StatusInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseId">DatabaseId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseType">DatabaseType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.enterpriseManagerBridgeId">EnterpriseManagerBridgeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.exadataInsightId">ExadataInsightId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fields">Fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.opsiPrivateEndpointId">OpsiPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.state">State</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.status">Status</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DatabaseInsightsCollection`<sup>Required</sup> <a name="DatabaseInsightsCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseInsightsCollection"></a>

```csharp
public DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList DatabaseInsightsCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.filter"></a>

```csharp
public DataOciOpsiDatabaseInsightsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList">DataOciOpsiDatabaseInsightsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseIdInput"></a>

```csharp
public string[] DatabaseIdInput { get; }
```

- *Type:* string[]

---

##### `DatabaseTypeInput`<sup>Optional</sup> <a name="DatabaseTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseTypeInput"></a>

```csharp
public string[] DatabaseTypeInput { get; }
```

- *Type:* string[]

---

##### `EnterpriseManagerBridgeIdInput`<sup>Optional</sup> <a name="EnterpriseManagerBridgeIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.enterpriseManagerBridgeIdInput"></a>

```csharp
public string EnterpriseManagerBridgeIdInput { get; }
```

- *Type:* string

---

##### `ExadataInsightIdInput`<sup>Optional</sup> <a name="ExadataInsightIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.exadataInsightIdInput"></a>

```csharp
public string ExadataInsightIdInput { get; }
```

- *Type:* string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fieldsInput"></a>

```csharp
public string[] FieldsInput { get; }
```

- *Type:* string[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OpsiPrivateEndpointIdInput`<sup>Optional</sup> <a name="OpsiPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.opsiPrivateEndpointIdInput"></a>

```csharp
public string OpsiPrivateEndpointIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.stateInput"></a>

```csharp
public string[] StateInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.statusInput"></a>

```csharp
public string[] StatusInput { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseId"></a>

```csharp
public string[] DatabaseId { get; }
```

- *Type:* string[]

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseType"></a>

```csharp
public string[] DatabaseType { get; }
```

- *Type:* string[]

---

##### `EnterpriseManagerBridgeId`<sup>Required</sup> <a name="EnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.enterpriseManagerBridgeId"></a>

```csharp
public string EnterpriseManagerBridgeId { get; }
```

- *Type:* string

---

##### `ExadataInsightId`<sup>Required</sup> <a name="ExadataInsightId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.exadataInsightId"></a>

```csharp
public string ExadataInsightId { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fields"></a>

```csharp
public string[] Fields { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OpsiPrivateEndpointId`<sup>Required</sup> <a name="OpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.opsiPrivateEndpointId"></a>

```csharp
public string OpsiPrivateEndpointId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.state"></a>

```csharp
public string[] State { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.status"></a>

```csharp
public string[] Status { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiDatabaseInsightsConfig <a name="DataOciOpsiDatabaseInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId = null,
    object CompartmentIdInSubtree = null,
    string[] DatabaseId = null,
    string[] DatabaseType = null,
    string EnterpriseManagerBridgeId = null,
    string ExadataInsightId = null,
    string[] Fields = null,
    object Filter = null,
    string Id = null,
    string OpsiPrivateEndpointId = null,
    string[] State = null,
    string[] Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#compartment_id DataOciOpsiDatabaseInsights#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#compartment_id_in_subtree DataOciOpsiDatabaseInsights#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.databaseId">DatabaseId</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#database_id DataOciOpsiDatabaseInsights#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.databaseType">DatabaseType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#database_type DataOciOpsiDatabaseInsights#database_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.enterpriseManagerBridgeId">EnterpriseManagerBridgeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#enterprise_manager_bridge_id DataOciOpsiDatabaseInsights#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.exadataInsightId">ExadataInsightId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#exadata_insight_id DataOciOpsiDatabaseInsights#exadata_insight_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.fields">Fields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#fields DataOciOpsiDatabaseInsights#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#id DataOciOpsiDatabaseInsights#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.opsiPrivateEndpointId">OpsiPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#opsi_private_endpoint_id DataOciOpsiDatabaseInsights#opsi_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.state">State</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#state DataOciOpsiDatabaseInsights#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.status">Status</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#status DataOciOpsiDatabaseInsights#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#compartment_id DataOciOpsiDatabaseInsights#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#compartment_id_in_subtree DataOciOpsiDatabaseInsights#compartment_id_in_subtree}.

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.databaseId"></a>

```csharp
public string[] DatabaseId { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#database_id DataOciOpsiDatabaseInsights#database_id}.

---

##### `DatabaseType`<sup>Optional</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.databaseType"></a>

```csharp
public string[] DatabaseType { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#database_type DataOciOpsiDatabaseInsights#database_type}.

---

##### `EnterpriseManagerBridgeId`<sup>Optional</sup> <a name="EnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.enterpriseManagerBridgeId"></a>

```csharp
public string EnterpriseManagerBridgeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#enterprise_manager_bridge_id DataOciOpsiDatabaseInsights#enterprise_manager_bridge_id}.

---

##### `ExadataInsightId`<sup>Optional</sup> <a name="ExadataInsightId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.exadataInsightId"></a>

```csharp
public string ExadataInsightId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#exadata_insight_id DataOciOpsiDatabaseInsights#exadata_insight_id}.

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.fields"></a>

```csharp
public string[] Fields { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#fields DataOciOpsiDatabaseInsights#fields}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#filter DataOciOpsiDatabaseInsights#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#id DataOciOpsiDatabaseInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OpsiPrivateEndpointId`<sup>Optional</sup> <a name="OpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.opsiPrivateEndpointId"></a>

```csharp
public string OpsiPrivateEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#opsi_private_endpoint_id DataOciOpsiDatabaseInsights#opsi_private_endpoint_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.state"></a>

```csharp
public string[] State { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#state DataOciOpsiDatabaseInsights#state}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.status"></a>

```csharp
public string[] Status { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#status DataOciOpsiDatabaseInsights#status}.

---

### DataOciOpsiDatabaseInsightsDatabaseInsightsCollection <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollection {

};
```


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems {

};
```


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails {

};
```


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails {

};
```


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts {

};
```


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails {

};
```


### DataOciOpsiDatabaseInsightsFilter <a name="DataOciOpsiDatabaseInsightsFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#name DataOciOpsiDatabaseInsights#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#values DataOciOpsiDatabaseInsights#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#regex DataOciOpsiDatabaseInsights#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#name DataOciOpsiDatabaseInsights#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#values DataOciOpsiDatabaseInsights#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#regex DataOciOpsiDatabaseInsights#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.get"></a>

```csharp
private DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.credentialSourceName">CredentialSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialSourceName`<sup>Required</sup> <a name="CredentialSourceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.credentialSourceName"></a>

```csharp
public string CredentialSourceName { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails</a>

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.get"></a>

```csharp
private DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.hostIp">HostIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostIp`<sup>Required</sup> <a name="HostIp" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.hostIp"></a>

```csharp
public string HostIp { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts</a>

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.get"></a>

```csharp
private DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.hosts">Hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.hosts"></a>

```csharp
public DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList Hosts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails</a>

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.get"></a>

```csharp
private DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.credentialSourceName">CredentialSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.walletSecretId">WalletSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialSourceName`<sup>Required</sup> <a name="CredentialSourceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.credentialSourceName"></a>

```csharp
public string CredentialSourceName { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `WalletSecretId`<sup>Required</sup> <a name="WalletSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.walletSecretId"></a>

```csharp
public string WalletSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails</a>

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.get"></a>

```csharp
private DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectionCredentialDetails">ConnectionCredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectionDetails">ConnectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectorId">ConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.credentialDetails">CredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseConnectionStatusDetails">DatabaseConnectionStatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseDisplayName">DatabaseDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseResourceType">DatabaseResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseType">DatabaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.dbmPrivateEndpointId">DbmPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerBridgeId">EnterpriseManagerBridgeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityDisplayName">EnterpriseManagerEntityDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityIdentifier">EnterpriseManagerEntityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityName">EnterpriseManagerEntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityType">EnterpriseManagerEntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerIdentifier">EnterpriseManagerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.entitySource">EntitySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.exadataInsightId">ExadataInsightId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isAdvancedFeaturesEnabled">IsAdvancedFeaturesEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isHeatWaveClusterAttached">IsHeatWaveClusterAttached</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isHighlyAvailable">IsHighlyAvailable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.opsiPrivateEndpointId">OpsiPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.parentId">ParentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.processorCount">ProcessorCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.rootId">RootId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionCredentialDetails`<sup>Required</sup> <a name="ConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectionCredentialDetails"></a>

```csharp
public DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList ConnectionCredentialDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList</a>

---

##### `ConnectionDetails`<sup>Required</sup> <a name="ConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectionDetails"></a>

```csharp
public DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList ConnectionDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList</a>

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectorId"></a>

```csharp
public string ConnectorId { get; }
```

- *Type:* string

---

##### `CredentialDetails`<sup>Required</sup> <a name="CredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.credentialDetails"></a>

```csharp
public DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList CredentialDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList</a>

---

##### `DatabaseConnectionStatusDetails`<sup>Required</sup> <a name="DatabaseConnectionStatusDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseConnectionStatusDetails"></a>

```csharp
public string DatabaseConnectionStatusDetails { get; }
```

- *Type:* string

---

##### `DatabaseDisplayName`<sup>Required</sup> <a name="DatabaseDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseDisplayName"></a>

```csharp
public string DatabaseDisplayName { get; }
```

- *Type:* string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DatabaseResourceType`<sup>Required</sup> <a name="DatabaseResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseResourceType"></a>

```csharp
public string DatabaseResourceType { get; }
```

- *Type:* string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseType"></a>

```csharp
public string DatabaseType { get; }
```

- *Type:* string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `DbmPrivateEndpointId`<sup>Required</sup> <a name="DbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.dbmPrivateEndpointId"></a>

```csharp
public string DbmPrivateEndpointId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `EnterpriseManagerBridgeId`<sup>Required</sup> <a name="EnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerBridgeId"></a>

```csharp
public string EnterpriseManagerBridgeId { get; }
```

- *Type:* string

---

##### `EnterpriseManagerEntityDisplayName`<sup>Required</sup> <a name="EnterpriseManagerEntityDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityDisplayName"></a>

```csharp
public string EnterpriseManagerEntityDisplayName { get; }
```

- *Type:* string

---

##### `EnterpriseManagerEntityIdentifier`<sup>Required</sup> <a name="EnterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityIdentifier"></a>

```csharp
public string EnterpriseManagerEntityIdentifier { get; }
```

- *Type:* string

---

##### `EnterpriseManagerEntityName`<sup>Required</sup> <a name="EnterpriseManagerEntityName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityName"></a>

```csharp
public string EnterpriseManagerEntityName { get; }
```

- *Type:* string

---

##### `EnterpriseManagerEntityType`<sup>Required</sup> <a name="EnterpriseManagerEntityType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityType"></a>

```csharp
public string EnterpriseManagerEntityType { get; }
```

- *Type:* string

---

##### `EnterpriseManagerIdentifier`<sup>Required</sup> <a name="EnterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerIdentifier"></a>

```csharp
public string EnterpriseManagerIdentifier { get; }
```

- *Type:* string

---

##### `EntitySource`<sup>Required</sup> <a name="EntitySource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.entitySource"></a>

```csharp
public string EntitySource { get; }
```

- *Type:* string

---

##### `ExadataInsightId`<sup>Required</sup> <a name="ExadataInsightId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.exadataInsightId"></a>

```csharp
public string ExadataInsightId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAdvancedFeaturesEnabled`<sup>Required</sup> <a name="IsAdvancedFeaturesEnabled" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isAdvancedFeaturesEnabled"></a>

```csharp
public IResolvable IsAdvancedFeaturesEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHeatWaveClusterAttached`<sup>Required</sup> <a name="IsHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isHeatWaveClusterAttached"></a>

```csharp
public IResolvable IsHeatWaveClusterAttached { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHighlyAvailable`<sup>Required</sup> <a name="IsHighlyAvailable" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isHighlyAvailable"></a>

```csharp
public IResolvable IsHighlyAvailable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; }
```

- *Type:* string

---

##### `OpsiPrivateEndpointId`<sup>Required</sup> <a name="OpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.opsiPrivateEndpointId"></a>

```csharp
public string OpsiPrivateEndpointId { get; }
```

- *Type:* string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.parentId"></a>

```csharp
public string ParentId { get; }
```

- *Type:* string

---

##### `ProcessorCount`<sup>Required</sup> <a name="ProcessorCount" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.processorCount"></a>

```csharp
public double ProcessorCount { get; }
```

- *Type:* double

---

##### `RootId`<sup>Required</sup> <a name="RootId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.rootId"></a>

```csharp
public string RootId { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems</a>

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.get"></a>

```csharp
private DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollection">DataOciOpsiDatabaseInsightsDatabaseInsightsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.items"></a>

```csharp
public DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOpsiDatabaseInsightsDatabaseInsightsCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollection">DataOciOpsiDatabaseInsightsDatabaseInsightsCollection</a>

---


### DataOciOpsiDatabaseInsightsFilterList <a name="DataOciOpsiDatabaseInsightsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.get"></a>

```csharp
private DataOciOpsiDatabaseInsightsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOpsiDatabaseInsightsFilterOutputReference <a name="DataOciOpsiDatabaseInsightsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpsiDatabaseInsightsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



