# `dataOciOsubOrganizationSubscriptionOrganizationSubscriptions` Submodule <a name="`dataOciOsubOrganizationSubscriptionOrganizationSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubOrganizationSubscriptionOrganizationSubscriptions <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions oci_osub_organization_subscription_organization_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubOrganizationSubscriptionOrganizationSubscriptions(Construct Scope, string Id, DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetXOneOriginRegion">ResetXOneOriginRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetXOneOriginRegion` <a name="ResetXOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetXOneOriginRegion"></a>

```csharp
private void ResetXOneOriginRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsubOrganizationSubscriptionOrganizationSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsubOrganizationSubscriptionOrganizationSubscriptions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsubOrganizationSubscriptionOrganizationSubscriptions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsubOrganizationSubscriptionOrganizationSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubOrganizationSubscriptionOrganizationSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptions">Subscriptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptionIdsInput">SubscriptionIdsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.xOneOriginRegionInput">XOneOriginRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptionIds">SubscriptionIds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.xOneOriginRegion">XOneOriginRegion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.filter"></a>

```csharp
public DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList</a>

---

##### `Subscriptions`<sup>Required</sup> <a name="Subscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptions"></a>

```csharp
public DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList Subscriptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdsInput`<sup>Optional</sup> <a name="SubscriptionIdsInput" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptionIdsInput"></a>

```csharp
public string SubscriptionIdsInput { get; }
```

- *Type:* string

---

##### `XOneOriginRegionInput`<sup>Optional</sup> <a name="XOneOriginRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.xOneOriginRegionInput"></a>

```csharp
public string XOneOriginRegionInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SubscriptionIds`<sup>Required</sup> <a name="SubscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptionIds"></a>

```csharp
public string SubscriptionIds { get; }
```

- *Type:* string

---

##### `XOneOriginRegion`<sup>Required</sup> <a name="XOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.xOneOriginRegion"></a>

```csharp
public string XOneOriginRegion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string SubscriptionIds,
    object Filter = null,
    string Id = null,
    string XOneOriginRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#compartment_id DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.subscriptionIds">SubscriptionIds</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#subscription_ids DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#subscription_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#id DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.xOneOriginRegion">XOneOriginRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#x_one_origin_region DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#x_one_origin_region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#compartment_id DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#compartment_id}.

---

##### `SubscriptionIds`<sup>Required</sup> <a name="SubscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.subscriptionIds"></a>

```csharp
public string SubscriptionIds { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#subscription_ids DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#subscription_ids}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#filter DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#id DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `XOneOriginRegion`<sup>Optional</sup> <a name="XOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.xOneOriginRegion"></a>

```csharp
public string XOneOriginRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#x_one_origin_region DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#x_one_origin_region}.

---

### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#name DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#values DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#regex DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#name DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#values DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#regex DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#regex}.

---

### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions {

};
```


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.get"></a>

```csharp
private DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.get"></a>

```csharp
private DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.isoCode">IsoCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.stdPrecision">StdPrecision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsoCode`<sup>Required</sup> <a name="IsoCode" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.isoCode"></a>

```csharp
public string IsoCode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StdPrecision`<sup>Required</sup> <a name="StdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.stdPrecision"></a>

```csharp
public string StdPrecision { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.internalValue"></a>

```csharp
public DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency</a>

---


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.get"></a>

```csharp
private DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.totalValue">TotalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.currency"></a>

```csharp
public DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList Currency { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `TotalValue`<sup>Required</sup> <a name="TotalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.totalValue"></a>

```csharp
public string TotalValue { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.internalValue"></a>

```csharp
public DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions</a>

---



