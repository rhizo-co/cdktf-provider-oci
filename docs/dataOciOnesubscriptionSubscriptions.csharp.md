# `dataOciOnesubscriptionSubscriptions` Submodule <a name="`dataOciOnesubscriptionSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionSubscriptions <a name="DataOciOnesubscriptionSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions oci_onesubscription_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptions(Construct Scope, string Id, DataOciOnesubscriptionSubscriptionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig">DataOciOnesubscriptionSubscriptionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig">DataOciOnesubscriptionSubscriptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetBuyerEmail">ResetBuyerEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetIsCommitInfoRequired">ResetIsCommitInfoRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetPlanNumber">ResetPlanNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetBuyerEmail` <a name="ResetBuyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetBuyerEmail"></a>

```csharp
private void ResetBuyerEmail()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsCommitInfoRequired` <a name="ResetIsCommitInfoRequired" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetIsCommitInfoRequired"></a>

```csharp
private void ResetIsCommitInfoRequired()
```

##### `ResetPlanNumber` <a name="ResetPlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetPlanNumber"></a>

```csharp
private void ResetPlanNumber()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetSubscriptionId"></a>

```csharp
private void ResetSubscriptionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionSubscriptions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionSubscriptions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionSubscriptions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionSubscriptions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOnesubscriptionSubscriptions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOnesubscriptionSubscriptions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOnesubscriptionSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList">DataOciOnesubscriptionSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.subscriptions">Subscriptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList">DataOciOnesubscriptionSubscriptionsSubscriptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.buyerEmailInput">BuyerEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.isCommitInfoRequiredInput">IsCommitInfoRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.planNumberInput">PlanNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.buyerEmail">BuyerEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.isCommitInfoRequired">IsCommitInfoRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.planNumber">PlanNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.filter"></a>

```csharp
public DataOciOnesubscriptionSubscriptionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList">DataOciOnesubscriptionSubscriptionsFilterList</a>

---

##### `Subscriptions`<sup>Required</sup> <a name="Subscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.subscriptions"></a>

```csharp
public DataOciOnesubscriptionSubscriptionsSubscriptionsList Subscriptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList">DataOciOnesubscriptionSubscriptionsSubscriptionsList</a>

---

##### `BuyerEmailInput`<sup>Optional</sup> <a name="BuyerEmailInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.buyerEmailInput"></a>

```csharp
public string BuyerEmailInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsCommitInfoRequiredInput`<sup>Optional</sup> <a name="IsCommitInfoRequiredInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.isCommitInfoRequiredInput"></a>

```csharp
public object IsCommitInfoRequiredInput { get; }
```

- *Type:* object

---

##### `PlanNumberInput`<sup>Optional</sup> <a name="PlanNumberInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.planNumberInput"></a>

```csharp
public string PlanNumberInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `BuyerEmail`<sup>Required</sup> <a name="BuyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.buyerEmail"></a>

```csharp
public string BuyerEmail { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsCommitInfoRequired`<sup>Required</sup> <a name="IsCommitInfoRequired" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.isCommitInfoRequired"></a>

```csharp
public object IsCommitInfoRequired { get; }
```

- *Type:* object

---

##### `PlanNumber`<sup>Required</sup> <a name="PlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.planNumber"></a>

```csharp
public string PlanNumber { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionSubscriptionsConfig <a name="DataOciOnesubscriptionSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsConfig {
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
    string SubscriptionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#compartment_id DataOciOnesubscriptionSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.buyerEmail">BuyerEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#buyer_email DataOciOnesubscriptionSubscriptions#buyer_email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#id DataOciOnesubscriptionSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.isCommitInfoRequired">IsCommitInfoRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#is_commit_info_required DataOciOnesubscriptionSubscriptions#is_commit_info_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.planNumber">PlanNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#plan_number DataOciOnesubscriptionSubscriptions#plan_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#subscription_id DataOciOnesubscriptionSubscriptions#subscription_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#compartment_id DataOciOnesubscriptionSubscriptions#compartment_id}.

---

##### `BuyerEmail`<sup>Optional</sup> <a name="BuyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.buyerEmail"></a>

```csharp
public string BuyerEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#buyer_email DataOciOnesubscriptionSubscriptions#buyer_email}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#filter DataOciOnesubscriptionSubscriptions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#id DataOciOnesubscriptionSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCommitInfoRequired`<sup>Optional</sup> <a name="IsCommitInfoRequired" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.isCommitInfoRequired"></a>

```csharp
public object IsCommitInfoRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#is_commit_info_required DataOciOnesubscriptionSubscriptions#is_commit_info_required}.

---

##### `PlanNumber`<sup>Optional</sup> <a name="PlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.planNumber"></a>

```csharp
public string PlanNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#plan_number DataOciOnesubscriptionSubscriptions#plan_number}.

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#subscription_id DataOciOnesubscriptionSubscriptions#subscription_id}.

---

### DataOciOnesubscriptionSubscriptionsFilter <a name="DataOciOnesubscriptionSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#name DataOciOnesubscriptionSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#values DataOciOnesubscriptionSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#regex DataOciOnesubscriptionSubscriptions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#name DataOciOnesubscriptionSubscriptions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#values DataOciOnesubscriptionSubscriptions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#regex DataOciOnesubscriptionSubscriptions#regex}.

---

### DataOciOnesubscriptionSubscriptionsSubscriptions <a name="DataOciOnesubscriptionSubscriptionsSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsSubscriptions {

};
```


### DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency {

};
```


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices {

};
```


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices {

};
```


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionSubscriptionsFilterList <a name="DataOciOnesubscriptionSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.get"></a>

```csharp
private DataOciOnesubscriptionSubscriptionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOnesubscriptionSubscriptionsFilterOutputReference <a name="DataOciOnesubscriptionSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.get"></a>

```csharp
private DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.isoCode">IsoCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.stdPrecision">StdPrecision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency">DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsoCode`<sup>Required</sup> <a name="IsoCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.isoCode"></a>

```csharp
public string IsoCode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StdPrecision`<sup>Required</sup> <a name="StdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.stdPrecision"></a>

```csharp
public string StdPrecision { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency">DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency</a>

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsList <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsSubscriptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.get"></a>

```csharp
private DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList">DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.holdReason">HoldReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.subscribedServices">SubscribedServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.timeHoldReleaseEta">TimeHoldReleaseEta</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptions">DataOciOnesubscriptionSubscriptionsSubscriptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.currency"></a>

```csharp
public DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList Currency { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList">DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList</a>

---

##### `HoldReason`<sup>Required</sup> <a name="HoldReason" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.holdReason"></a>

```csharp
public string HoldReason { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubscribedServices`<sup>Required</sup> <a name="SubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.subscribedServices"></a>

```csharp
public DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList SubscribedServices { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList</a>

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeHoldReleaseEta`<sup>Required</sup> <a name="TimeHoldReleaseEta" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.timeHoldReleaseEta"></a>

```csharp
public string TimeHoldReleaseEta { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscriptionsSubscriptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptions">DataOciOnesubscriptionSubscriptionsSubscriptions</a>

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.get"></a>

```csharp
private DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.availableAmount">AvailableAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue">FundedAllocationValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount">LineNetAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.quantity">Quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableAmount`<sup>Required</sup> <a name="AvailableAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.availableAmount"></a>

```csharp
public string AvailableAmount { get; }
```

- *Type:* string

---

##### `FundedAllocationValue`<sup>Required</sup> <a name="FundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue"></a>

```csharp
public string FundedAllocationValue { get; }
```

- *Type:* string

---

##### `LineNetAmount`<sup>Required</sup> <a name="LineNetAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount"></a>

```csharp
public string LineNetAmount { get; }
```

- *Type:* string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.quantity"></a>

```csharp
public string Quantity { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices</a>

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.get"></a>

```csharp
private DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.availableAmount">AvailableAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.bookingOptyNumber">BookingOptyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.commitmentServices">CommitmentServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.csi">Csi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.dataCenterRegion">DataCenterRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fundedAllocationValue">FundedAllocationValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.isIntentToPay">IsIntentToPay</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.operationType">OperationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.orderNumber">OrderNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.originalPromoAmount">OriginalPromoAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.partnerTransactionType">PartnerTransactionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.pricingModel">PricingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.programType">ProgramType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.promoType">PromoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.quantity">Quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValue">TermValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValueUom">TermValueUom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.totalValue">TotalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.usedAmount">UsedAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableAmount`<sup>Required</sup> <a name="AvailableAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.availableAmount"></a>

```csharp
public string AvailableAmount { get; }
```

- *Type:* string

---

##### `BookingOptyNumber`<sup>Required</sup> <a name="BookingOptyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.bookingOptyNumber"></a>

```csharp
public string BookingOptyNumber { get; }
```

- *Type:* string

---

##### `CommitmentServices`<sup>Required</sup> <a name="CommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.commitmentServices"></a>

```csharp
public DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList CommitmentServices { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList</a>

---

##### `Csi`<sup>Required</sup> <a name="Csi" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.csi"></a>

```csharp
public string Csi { get; }
```

- *Type:* string

---

##### `DataCenterRegion`<sup>Required</sup> <a name="DataCenterRegion" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.dataCenterRegion"></a>

```csharp
public string DataCenterRegion { get; }
```

- *Type:* string

---

##### `FundedAllocationValue`<sup>Required</sup> <a name="FundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fundedAllocationValue"></a>

```csharp
public string FundedAllocationValue { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsIntentToPay`<sup>Required</sup> <a name="IsIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.isIntentToPay"></a>

```csharp
public IResolvable IsIntentToPay { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.netUnitPrice"></a>

```csharp
public string NetUnitPrice { get; }
```

- *Type:* string

---

##### `OperationType`<sup>Required</sup> <a name="OperationType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.operationType"></a>

```csharp
public string OperationType { get; }
```

- *Type:* string

---

##### `OrderNumber`<sup>Required</sup> <a name="OrderNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.orderNumber"></a>

```csharp
public string OrderNumber { get; }
```

- *Type:* string

---

##### `OriginalPromoAmount`<sup>Required</sup> <a name="OriginalPromoAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.originalPromoAmount"></a>

```csharp
public string OriginalPromoAmount { get; }
```

- *Type:* string

---

##### `PartnerTransactionType`<sup>Required</sup> <a name="PartnerTransactionType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.partnerTransactionType"></a>

```csharp
public string PartnerTransactionType { get; }
```

- *Type:* string

---

##### `PricingModel`<sup>Required</sup> <a name="PricingModel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.pricingModel"></a>

```csharp
public string PricingModel { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.product"></a>

```csharp
public DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList Product { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList</a>

---

##### `ProgramType`<sup>Required</sup> <a name="ProgramType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.programType"></a>

```csharp
public string ProgramType { get; }
```

- *Type:* string

---

##### `PromoType`<sup>Required</sup> <a name="PromoType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.promoType"></a>

```csharp
public string PromoType { get; }
```

- *Type:* string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.quantity"></a>

```csharp
public string Quantity { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TermValue`<sup>Required</sup> <a name="TermValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValue"></a>

```csharp
public string TermValue { get; }
```

- *Type:* string

---

##### `TermValueUom`<sup>Required</sup> <a name="TermValueUom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValueUom"></a>

```csharp
public string TermValueUom { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `TotalValue`<sup>Required</sup> <a name="TotalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.totalValue"></a>

```csharp
public string TotalValue { get; }
```

- *Type:* string

---

##### `UsedAmount`<sup>Required</sup> <a name="UsedAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.usedAmount"></a>

```csharp
public string UsedAmount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices</a>

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.get"></a>

```csharp
private DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.partNumber">PartNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.provisioningGroup">ProvisioningGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.partNumber"></a>

```csharp
public string PartNumber { get; }
```

- *Type:* string

---

##### `ProvisioningGroup`<sup>Required</sup> <a name="ProvisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.provisioningGroup"></a>

```csharp
public string ProvisioningGroup { get; }
```

- *Type:* string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.unitOfMeasure"></a>

```csharp
public string UnitOfMeasure { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct</a>

---



