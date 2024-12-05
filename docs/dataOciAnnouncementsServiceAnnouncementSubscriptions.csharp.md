# `dataOciAnnouncementsServiceAnnouncementSubscriptions` Submodule <a name="`dataOciAnnouncementsServiceAnnouncementSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAnnouncementsServiceAnnouncementSubscriptions <a name="DataOciAnnouncementsServiceAnnouncementSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions oci_announcements_service_announcement_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptions(Construct Scope, string Id, DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig">DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig">DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAnnouncementsServiceAnnouncementSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAnnouncementsServiceAnnouncementSubscriptions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAnnouncementsServiceAnnouncementSubscriptions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAnnouncementsServiceAnnouncementSubscriptions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAnnouncementsServiceAnnouncementSubscriptions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciAnnouncementsServiceAnnouncementSubscriptions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAnnouncementsServiceAnnouncementSubscriptions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAnnouncementsServiceAnnouncementSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAnnouncementsServiceAnnouncementSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.announcementSubscriptionCollection">AnnouncementSubscriptionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AnnouncementSubscriptionCollection`<sup>Required</sup> <a name="AnnouncementSubscriptionCollection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.announcementSubscriptionCollection"></a>

```csharp
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList AnnouncementSubscriptionCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.filter"></a>

```csharp
public DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection {

};
```


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems {

};
```


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups {

};
```


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters {

};
```


### DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#compartment_id DataOciAnnouncementsServiceAnnouncementSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#display_name DataOciAnnouncementsServiceAnnouncementSubscriptions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#id DataOciAnnouncementsServiceAnnouncementSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#state DataOciAnnouncementsServiceAnnouncementSubscriptions#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#compartment_id DataOciAnnouncementsServiceAnnouncementSubscriptions#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#display_name DataOciAnnouncementsServiceAnnouncementSubscriptions#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#filter DataOciAnnouncementsServiceAnnouncementSubscriptions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#id DataOciAnnouncementsServiceAnnouncementSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#state DataOciAnnouncementsServiceAnnouncementSubscriptions#state}.

---

### DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#name DataOciAnnouncementsServiceAnnouncementSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#values DataOciAnnouncementsServiceAnnouncementSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#regex DataOciAnnouncementsServiceAnnouncementSubscriptions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#name DataOciAnnouncementsServiceAnnouncementSubscriptions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#values DataOciAnnouncementsServiceAnnouncementSubscriptions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#regex DataOciAnnouncementsServiceAnnouncementSubscriptions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.get"></a>

```csharp
private DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.internalValue"></a>

```csharp
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters</a>

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.get"></a>

```csharp
private DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.filters">Filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.filters"></a>

```csharp
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList Filters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups</a>

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.get"></a>

```csharp
private DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.filterGroups">FilterGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.onsTopicId">OnsTopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.preferredLanguage">PreferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.preferredTimeZone">PreferredTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FilterGroups`<sup>Required</sup> <a name="FilterGroups" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.filterGroups"></a>

```csharp
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList FilterGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `OnsTopicId`<sup>Required</sup> <a name="OnsTopicId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.onsTopicId"></a>

```csharp
public string OnsTopicId { get; }
```

- *Type:* string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.preferredLanguage"></a>

```csharp
public string PreferredLanguage { get; }
```

- *Type:* string

---

##### `PreferredTimeZone`<sup>Required</sup> <a name="PreferredTimeZone" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.preferredTimeZone"></a>

```csharp
public string PreferredTimeZone { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems</a>

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.get"></a>

```csharp
private DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.items"></a>

```csharp
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection</a>

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.get"></a>

```csharp
private DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



