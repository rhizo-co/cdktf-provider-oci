# `dataOciAnnouncementsServiceAnnouncementSubscription` Submodule <a name="`dataOciAnnouncementsServiceAnnouncementSubscription` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAnnouncementsServiceAnnouncementSubscription <a name="DataOciAnnouncementsServiceAnnouncementSubscription" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscription oci_announcements_service_announcement_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscription(Construct Scope, string Id, DataOciAnnouncementsServiceAnnouncementSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig">DataOciAnnouncementsServiceAnnouncementSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig">DataOciAnnouncementsServiceAnnouncementSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAnnouncementsServiceAnnouncementSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAnnouncementsServiceAnnouncementSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAnnouncementsServiceAnnouncementSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAnnouncementsServiceAnnouncementSubscription.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAnnouncementsServiceAnnouncementSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciAnnouncementsServiceAnnouncementSubscription resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAnnouncementsServiceAnnouncementSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAnnouncementsServiceAnnouncementSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAnnouncementsServiceAnnouncementSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.filterGroups">FilterGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList">DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.onsTopicId">OnsTopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.preferredLanguage">PreferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.preferredTimeZone">PreferredTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.announcementSubscriptionIdInput">AnnouncementSubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.announcementSubscriptionId">AnnouncementSubscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FilterGroups`<sup>Required</sup> <a name="FilterGroups" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.filterGroups"></a>

```csharp
public DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList FilterGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList">DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `OnsTopicId`<sup>Required</sup> <a name="OnsTopicId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.onsTopicId"></a>

```csharp
public string OnsTopicId { get; }
```

- *Type:* string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.preferredLanguage"></a>

```csharp
public string PreferredLanguage { get; }
```

- *Type:* string

---

##### `PreferredTimeZone`<sup>Required</sup> <a name="PreferredTimeZone" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.preferredTimeZone"></a>

```csharp
public string PreferredTimeZone { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AnnouncementSubscriptionIdInput`<sup>Optional</sup> <a name="AnnouncementSubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.announcementSubscriptionIdInput"></a>

```csharp
public string AnnouncementSubscriptionIdInput { get; }
```

- *Type:* string

---

##### `AnnouncementSubscriptionId`<sup>Required</sup> <a name="AnnouncementSubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.announcementSubscriptionId"></a>

```csharp
public string AnnouncementSubscriptionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAnnouncementsServiceAnnouncementSubscriptionConfig <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionConfig" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AnnouncementSubscriptionId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.announcementSubscriptionId">AnnouncementSubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscription#announcement_subscription_id DataOciAnnouncementsServiceAnnouncementSubscription#announcement_subscription_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AnnouncementSubscriptionId`<sup>Required</sup> <a name="AnnouncementSubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.announcementSubscriptionId"></a>

```csharp
public string AnnouncementSubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscription#announcement_subscription_id DataOciAnnouncementsServiceAnnouncementSubscription#announcement_subscription_id}.

---

### DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups {

};
```


### DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.get"></a>

```csharp
private DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.internalValue"></a>

```csharp
public DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.get"></a>

```csharp
private DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.filters">Filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList">DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups">DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.filters"></a>

```csharp
public DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList Filters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList">DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups">DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups</a>

---



