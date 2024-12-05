# `dataOciOnesubscriptionOrganizationSubscriptions` Submodule <a name="`dataOciOnesubscriptionOrganizationSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionOrganizationSubscriptions <a name="DataOciOnesubscriptionOrganizationSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions oci_onesubscription_organization_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionOrganizationSubscriptions(Construct Scope, string Id, DataOciOnesubscriptionOrganizationSubscriptionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig">DataOciOnesubscriptionOrganizationSubscriptionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig">DataOciOnesubscriptionOrganizationSubscriptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionOrganizationSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionOrganizationSubscriptions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionOrganizationSubscriptions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionOrganizationSubscriptions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionOrganizationSubscriptions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOnesubscriptionOrganizationSubscriptions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOnesubscriptionOrganizationSubscriptions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOnesubscriptionOrganizationSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionOrganizationSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList">DataOciOnesubscriptionOrganizationSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.organizationSubscriptions">OrganizationSubscriptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.filter"></a>

```csharp
public DataOciOnesubscriptionOrganizationSubscriptionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList">DataOciOnesubscriptionOrganizationSubscriptionsFilterList</a>

---

##### `OrganizationSubscriptions`<sup>Required</sup> <a name="OrganizationSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.organizationSubscriptions"></a>

```csharp
public DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList OrganizationSubscriptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionOrganizationSubscriptionsConfig <a name="DataOciOnesubscriptionOrganizationSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionOrganizationSubscriptionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#compartment_id DataOciOnesubscriptionOrganizationSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#id DataOciOnesubscriptionOrganizationSubscriptions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#compartment_id DataOciOnesubscriptionOrganizationSubscriptions#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#filter DataOciOnesubscriptionOrganizationSubscriptions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#id DataOciOnesubscriptionOrganizationSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOnesubscriptionOrganizationSubscriptionsFilter <a name="DataOciOnesubscriptionOrganizationSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionOrganizationSubscriptionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#name DataOciOnesubscriptionOrganizationSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#values DataOciOnesubscriptionOrganizationSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#regex DataOciOnesubscriptionOrganizationSubscriptions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#name DataOciOnesubscriptionOrganizationSubscriptions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#values DataOciOnesubscriptionOrganizationSubscriptions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#regex DataOciOnesubscriptionOrganizationSubscriptions#regex}.

---

### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions {

};
```


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionOrganizationSubscriptionsFilterList <a name="DataOciOnesubscriptionOrganizationSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionOrganizationSubscriptionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.get"></a>

```csharp
private DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference <a name="DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.get"></a>

```csharp
private DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.isoCode">IsoCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.stdPrecision">StdPrecision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsoCode`<sup>Required</sup> <a name="IsoCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.isoCode"></a>

```csharp
public string IsoCode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StdPrecision`<sup>Required</sup> <a name="StdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.stdPrecision"></a>

```csharp
public string StdPrecision { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency</a>

---


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.get"></a>

```csharp
private DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.totalValue">TotalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.currency"></a>

```csharp
public DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList Currency { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `TotalValue`<sup>Required</sup> <a name="TotalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.totalValue"></a>

```csharp
public string TotalValue { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions</a>

---



