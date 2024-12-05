# `dataOciOsubSubscriptionSubscriptions` Submodule <a name="`dataOciOsubSubscriptionSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubSubscriptionSubscriptions <a name="DataOciOsubSubscriptionSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions oci_osub_subscription_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptions(Construct Scope, string Id, DataOciOsubSubscriptionSubscriptionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig">DataOciOsubSubscriptionSubscriptionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig">DataOciOsubSubscriptionSubscriptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetBuyerEmail">ResetBuyerEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetIsCommitInfoRequired">ResetIsCommitInfoRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetPlanNumber">ResetPlanNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetXOneGatewaySubscriptionId">ResetXOneGatewaySubscriptionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetXOneOriginRegion">ResetXOneOriginRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetBuyerEmail` <a name="ResetBuyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetBuyerEmail"></a>

```csharp
private void ResetBuyerEmail()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsCommitInfoRequired` <a name="ResetIsCommitInfoRequired" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetIsCommitInfoRequired"></a>

```csharp
private void ResetIsCommitInfoRequired()
```

##### `ResetPlanNumber` <a name="ResetPlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetPlanNumber"></a>

```csharp
private void ResetPlanNumber()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetSubscriptionId"></a>

```csharp
private void ResetSubscriptionId()
```

##### `ResetXOneGatewaySubscriptionId` <a name="ResetXOneGatewaySubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetXOneGatewaySubscriptionId"></a>

```csharp
private void ResetXOneGatewaySubscriptionId()
```

##### `ResetXOneOriginRegion` <a name="ResetXOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetXOneOriginRegion"></a>

```csharp
private void ResetXOneOriginRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsubSubscriptionSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsubSubscriptionSubscriptions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsubSubscriptionSubscriptions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsubSubscriptionSubscriptions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsubSubscriptionSubscriptions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsubSubscriptionSubscriptions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsubSubscriptionSubscriptions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsubSubscriptionSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubSubscriptionSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList">DataOciOsubSubscriptionSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptions">Subscriptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList">DataOciOsubSubscriptionSubscriptionsSubscriptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.buyerEmailInput">BuyerEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.isCommitInfoRequiredInput">IsCommitInfoRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.planNumberInput">PlanNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneGatewaySubscriptionIdInput">XOneGatewaySubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneOriginRegionInput">XOneOriginRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.buyerEmail">BuyerEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.isCommitInfoRequired">IsCommitInfoRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.planNumber">PlanNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneGatewaySubscriptionId">XOneGatewaySubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneOriginRegion">XOneOriginRegion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.filter"></a>

```csharp
public DataOciOsubSubscriptionSubscriptionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList">DataOciOsubSubscriptionSubscriptionsFilterList</a>

---

##### `Subscriptions`<sup>Required</sup> <a name="Subscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptions"></a>

```csharp
public DataOciOsubSubscriptionSubscriptionsSubscriptionsList Subscriptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList">DataOciOsubSubscriptionSubscriptionsSubscriptionsList</a>

---

##### `BuyerEmailInput`<sup>Optional</sup> <a name="BuyerEmailInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.buyerEmailInput"></a>

```csharp
public string BuyerEmailInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsCommitInfoRequiredInput`<sup>Optional</sup> <a name="IsCommitInfoRequiredInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.isCommitInfoRequiredInput"></a>

```csharp
public object IsCommitInfoRequiredInput { get; }
```

- *Type:* object

---

##### `PlanNumberInput`<sup>Optional</sup> <a name="PlanNumberInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.planNumberInput"></a>

```csharp
public string PlanNumberInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `XOneGatewaySubscriptionIdInput`<sup>Optional</sup> <a name="XOneGatewaySubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneGatewaySubscriptionIdInput"></a>

```csharp
public string XOneGatewaySubscriptionIdInput { get; }
```

- *Type:* string

---

##### `XOneOriginRegionInput`<sup>Optional</sup> <a name="XOneOriginRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneOriginRegionInput"></a>

```csharp
public string XOneOriginRegionInput { get; }
```

- *Type:* string

---

##### `BuyerEmail`<sup>Required</sup> <a name="BuyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.buyerEmail"></a>

```csharp
public string BuyerEmail { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsCommitInfoRequired`<sup>Required</sup> <a name="IsCommitInfoRequired" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.isCommitInfoRequired"></a>

```csharp
public object IsCommitInfoRequired { get; }
```

- *Type:* object

---

##### `PlanNumber`<sup>Required</sup> <a name="PlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.planNumber"></a>

```csharp
public string PlanNumber { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `XOneGatewaySubscriptionId`<sup>Required</sup> <a name="XOneGatewaySubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneGatewaySubscriptionId"></a>

```csharp
public string XOneGatewaySubscriptionId { get; }
```

- *Type:* string

---

##### `XOneOriginRegion`<sup>Required</sup> <a name="XOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneOriginRegion"></a>

```csharp
public string XOneOriginRegion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubSubscriptionSubscriptionsConfig <a name="DataOciOsubSubscriptionSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string BuyerEmail = null,
    object Filter = null,
    string Id = null,
    object IsCommitInfoRequired = null,
    string PlanNumber = null,
    string SubscriptionId = null,
    string XOneGatewaySubscriptionId = null,
    string XOneOriginRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#compartment_id DataOciOsubSubscriptionSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.buyerEmail">BuyerEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#buyer_email DataOciOsubSubscriptionSubscriptions#buyer_email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#id DataOciOsubSubscriptionSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.isCommitInfoRequired">IsCommitInfoRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#is_commit_info_required DataOciOsubSubscriptionSubscriptions#is_commit_info_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.planNumber">PlanNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#plan_number DataOciOsubSubscriptionSubscriptions#plan_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#subscription_id DataOciOsubSubscriptionSubscriptions#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.xOneGatewaySubscriptionId">XOneGatewaySubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#x_one_gateway_subscription_id DataOciOsubSubscriptionSubscriptions#x_one_gateway_subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.xOneOriginRegion">XOneOriginRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#x_one_origin_region DataOciOsubSubscriptionSubscriptions#x_one_origin_region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#compartment_id DataOciOsubSubscriptionSubscriptions#compartment_id}.

---

##### `BuyerEmail`<sup>Optional</sup> <a name="BuyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.buyerEmail"></a>

```csharp
public string BuyerEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#buyer_email DataOciOsubSubscriptionSubscriptions#buyer_email}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#filter DataOciOsubSubscriptionSubscriptions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#id DataOciOsubSubscriptionSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCommitInfoRequired`<sup>Optional</sup> <a name="IsCommitInfoRequired" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.isCommitInfoRequired"></a>

```csharp
public object IsCommitInfoRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#is_commit_info_required DataOciOsubSubscriptionSubscriptions#is_commit_info_required}.

---

##### `PlanNumber`<sup>Optional</sup> <a name="PlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.planNumber"></a>

```csharp
public string PlanNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#plan_number DataOciOsubSubscriptionSubscriptions#plan_number}.

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#subscription_id DataOciOsubSubscriptionSubscriptions#subscription_id}.

---

##### `XOneGatewaySubscriptionId`<sup>Optional</sup> <a name="XOneGatewaySubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.xOneGatewaySubscriptionId"></a>

```csharp
public string XOneGatewaySubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#x_one_gateway_subscription_id DataOciOsubSubscriptionSubscriptions#x_one_gateway_subscription_id}.

---

##### `XOneOriginRegion`<sup>Optional</sup> <a name="XOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.xOneOriginRegion"></a>

```csharp
public string XOneOriginRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#x_one_origin_region DataOciOsubSubscriptionSubscriptions#x_one_origin_region}.

---

### DataOciOsubSubscriptionSubscriptionsFilter <a name="DataOciOsubSubscriptionSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#name DataOciOsubSubscriptionSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#values DataOciOsubSubscriptionSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#regex DataOciOsubSubscriptionSubscriptions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#name DataOciOsubSubscriptionSubscriptions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#values DataOciOsubSubscriptionSubscriptions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#regex DataOciOsubSubscriptionSubscriptions#regex}.

---

### DataOciOsubSubscriptionSubscriptionsSubscriptions <a name="DataOciOsubSubscriptionSubscriptionsSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsSubscriptions {

};
```


### DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency {

};
```


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices {

};
```


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices {

};
```


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubSubscriptionSubscriptionsFilterList <a name="DataOciOsubSubscriptionSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.get"></a>

```csharp
private DataOciOsubSubscriptionSubscriptionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsubSubscriptionSubscriptionsFilterOutputReference <a name="DataOciOsubSubscriptionSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.get"></a>

```csharp
private DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.isoCode">IsoCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.stdPrecision">StdPrecision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency">DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsoCode`<sup>Required</sup> <a name="IsoCode" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.isoCode"></a>

```csharp
public string IsoCode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StdPrecision`<sup>Required</sup> <a name="StdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.stdPrecision"></a>

```csharp
public string StdPrecision { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.internalValue"></a>

```csharp
public DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency">DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency</a>

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsList <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsSubscriptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.get"></a>

```csharp
private DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList">DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.subscribedServices">SubscribedServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptions">DataOciOsubSubscriptionSubscriptionsSubscriptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.currency"></a>

```csharp
public DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList Currency { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList">DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList</a>

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubscribedServices`<sup>Required</sup> <a name="SubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.subscribedServices"></a>

```csharp
public DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList SubscribedServices { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList</a>

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.internalValue"></a>

```csharp
public DataOciOsubSubscriptionSubscriptionsSubscriptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptions">DataOciOsubSubscriptionSubscriptionsSubscriptions</a>

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.get"></a>

```csharp
private DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.availableAmount">AvailableAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue">FundedAllocationValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount">LineNetAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.quantity">Quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableAmount`<sup>Required</sup> <a name="AvailableAmount" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.availableAmount"></a>

```csharp
public string AvailableAmount { get; }
```

- *Type:* string

---

##### `FundedAllocationValue`<sup>Required</sup> <a name="FundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue"></a>

```csharp
public string FundedAllocationValue { get; }
```

- *Type:* string

---

##### `LineNetAmount`<sup>Required</sup> <a name="LineNetAmount" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount"></a>

```csharp
public string LineNetAmount { get; }
```

- *Type:* string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.quantity"></a>

```csharp
public string Quantity { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.internalValue"></a>

```csharp
public DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices</a>

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.get"></a>

```csharp
private DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.bookingOptyNumber">BookingOptyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.commitmentServices">CommitmentServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.csi">Csi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.dataCenterRegion">DataCenterRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fundedAllocationValue">FundedAllocationValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.isIntentToPay">IsIntentToPay</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.operationType">OperationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.orderNumber">OrderNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.partnerTransactionType">PartnerTransactionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.pricingModel">PricingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.programType">ProgramType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.promoType">PromoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.quantity">Quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValue">TermValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValueUom">TermValueUom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.totalValue">TotalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BookingOptyNumber`<sup>Required</sup> <a name="BookingOptyNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.bookingOptyNumber"></a>

```csharp
public string BookingOptyNumber { get; }
```

- *Type:* string

---

##### `CommitmentServices`<sup>Required</sup> <a name="CommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.commitmentServices"></a>

```csharp
public DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList CommitmentServices { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList</a>

---

##### `Csi`<sup>Required</sup> <a name="Csi" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.csi"></a>

```csharp
public string Csi { get; }
```

- *Type:* string

---

##### `DataCenterRegion`<sup>Required</sup> <a name="DataCenterRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.dataCenterRegion"></a>

```csharp
public string DataCenterRegion { get; }
```

- *Type:* string

---

##### `FundedAllocationValue`<sup>Required</sup> <a name="FundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fundedAllocationValue"></a>

```csharp
public string FundedAllocationValue { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsIntentToPay`<sup>Required</sup> <a name="IsIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.isIntentToPay"></a>

```csharp
public IResolvable IsIntentToPay { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.netUnitPrice"></a>

```csharp
public string NetUnitPrice { get; }
```

- *Type:* string

---

##### `OperationType`<sup>Required</sup> <a name="OperationType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.operationType"></a>

```csharp
public string OperationType { get; }
```

- *Type:* string

---

##### `OrderNumber`<sup>Required</sup> <a name="OrderNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.orderNumber"></a>

```csharp
public string OrderNumber { get; }
```

- *Type:* string

---

##### `PartnerTransactionType`<sup>Required</sup> <a name="PartnerTransactionType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.partnerTransactionType"></a>

```csharp
public string PartnerTransactionType { get; }
```

- *Type:* string

---

##### `PricingModel`<sup>Required</sup> <a name="PricingModel" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.pricingModel"></a>

```csharp
public string PricingModel { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.product"></a>

```csharp
public DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList Product { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList</a>

---

##### `ProgramType`<sup>Required</sup> <a name="ProgramType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.programType"></a>

```csharp
public string ProgramType { get; }
```

- *Type:* string

---

##### `PromoType`<sup>Required</sup> <a name="PromoType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.promoType"></a>

```csharp
public string PromoType { get; }
```

- *Type:* string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.quantity"></a>

```csharp
public string Quantity { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TermValue`<sup>Required</sup> <a name="TermValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValue"></a>

```csharp
public string TermValue { get; }
```

- *Type:* string

---

##### `TermValueUom`<sup>Required</sup> <a name="TermValueUom" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValueUom"></a>

```csharp
public string TermValueUom { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `TotalValue`<sup>Required</sup> <a name="TotalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.totalValue"></a>

```csharp
public string TotalValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.internalValue"></a>

```csharp
public DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices</a>

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.get"></a>

```csharp
private DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.partNumber">PartNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.provisioningGroup">ProvisioningGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.partNumber"></a>

```csharp
public string PartNumber { get; }
```

- *Type:* string

---

##### `ProvisioningGroup`<sup>Required</sup> <a name="ProvisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.provisioningGroup"></a>

```csharp
public string ProvisioningGroup { get; }
```

- *Type:* string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.unitOfMeasure"></a>

```csharp
public string UnitOfMeasure { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.internalValue"></a>

```csharp
public DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct</a>

---



