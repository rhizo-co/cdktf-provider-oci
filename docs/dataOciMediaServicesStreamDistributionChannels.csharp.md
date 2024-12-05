# `dataOciMediaServicesStreamDistributionChannels` Submodule <a name="`dataOciMediaServicesStreamDistributionChannels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesStreamDistributionChannels <a name="DataOciMediaServicesStreamDistributionChannels" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels oci_media_services_stream_distribution_channels}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamDistributionChannels(Construct Scope, string Id, DataOciMediaServicesStreamDistributionChannelsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig">DataOciMediaServicesStreamDistributionChannelsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig">DataOciMediaServicesStreamDistributionChannelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesStreamDistributionChannels resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesStreamDistributionChannels.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesStreamDistributionChannels.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesStreamDistributionChannels.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesStreamDistributionChannels.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMediaServicesStreamDistributionChannels resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMediaServicesStreamDistributionChannels to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMediaServicesStreamDistributionChannels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesStreamDistributionChannels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList">DataOciMediaServicesStreamDistributionChannelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.streamDistributionChannelCollection">StreamDistributionChannelCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.filter"></a>

```csharp
public DataOciMediaServicesStreamDistributionChannelsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList">DataOciMediaServicesStreamDistributionChannelsFilterList</a>

---

##### `StreamDistributionChannelCollection`<sup>Required</sup> <a name="StreamDistributionChannelCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.streamDistributionChannelCollection"></a>

```csharp
public DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList StreamDistributionChannelCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesStreamDistributionChannelsConfig <a name="DataOciMediaServicesStreamDistributionChannelsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamDistributionChannelsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#compartment_id DataOciMediaServicesStreamDistributionChannels#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#display_name DataOciMediaServicesStreamDistributionChannels#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#id DataOciMediaServicesStreamDistributionChannels#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#state DataOciMediaServicesStreamDistributionChannels#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#compartment_id DataOciMediaServicesStreamDistributionChannels#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#display_name DataOciMediaServicesStreamDistributionChannels#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#filter DataOciMediaServicesStreamDistributionChannels#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#id DataOciMediaServicesStreamDistributionChannels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#state DataOciMediaServicesStreamDistributionChannels#state}.

---

### DataOciMediaServicesStreamDistributionChannelsFilter <a name="DataOciMediaServicesStreamDistributionChannelsFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamDistributionChannelsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#name DataOciMediaServicesStreamDistributionChannels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#values DataOciMediaServicesStreamDistributionChannels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#regex DataOciMediaServicesStreamDistributionChannels#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#name DataOciMediaServicesStreamDistributionChannels#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#values DataOciMediaServicesStreamDistributionChannels#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#regex DataOciMediaServicesStreamDistributionChannels#regex}.

---

### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection {

};
```


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems {

};
```


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesStreamDistributionChannelsFilterList <a name="DataOciMediaServicesStreamDistributionChannelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamDistributionChannelsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.get"></a>

```csharp
private DataOciMediaServicesStreamDistributionChannelsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciMediaServicesStreamDistributionChannelsFilterOutputReference <a name="DataOciMediaServicesStreamDistributionChannelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamDistributionChannelsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.get"></a>

```csharp
private DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.get"></a>

```csharp
private DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.internalValue"></a>

```csharp
public DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks</a>

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.isLockOverride">IsLockOverride</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.isLockOverride"></a>

```csharp
public IResolvable IsLockOverride { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.locks"></a>

```csharp
public DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems</a>

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.get"></a>

```csharp
private DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.items"></a>

```csharp
public DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection</a>

---



