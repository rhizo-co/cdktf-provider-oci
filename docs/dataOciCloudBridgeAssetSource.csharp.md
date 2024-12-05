# `dataOciCloudBridgeAssetSource` Submodule <a name="`dataOciCloudBridgeAssetSource` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudBridgeAssetSource <a name="DataOciCloudBridgeAssetSource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_source oci_cloud_bridge_asset_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudBridgeAssetSource(Construct Scope, string Id, DataOciCloudBridgeAssetSourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig">DataOciCloudBridgeAssetSourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig">DataOciCloudBridgeAssetSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudBridgeAssetSource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudBridgeAssetSource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudBridgeAssetSource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudBridgeAssetSource.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudBridgeAssetSource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCloudBridgeAssetSource resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudBridgeAssetSource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudBridgeAssetSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_source#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudBridgeAssetSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.areHistoricalMetricsCollected">AreHistoricalMetricsCollected</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.areRealtimeMetricsCollected">AreRealtimeMetricsCollected</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.assetsCompartmentId">AssetsCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.discoveryCredentials">DiscoveryCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList">DataOciCloudBridgeAssetSourceDiscoveryCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.discoveryScheduleId">DiscoveryScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.inventoryId">InventoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.replicationCredentials">ReplicationCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList">DataOciCloudBridgeAssetSourceReplicationCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.vcenterEndpoint">VcenterEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.assetSourceIdInput">AssetSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.assetSourceId">AssetSourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AreHistoricalMetricsCollected`<sup>Required</sup> <a name="AreHistoricalMetricsCollected" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.areHistoricalMetricsCollected"></a>

```csharp
public IResolvable AreHistoricalMetricsCollected { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AreRealtimeMetricsCollected`<sup>Required</sup> <a name="AreRealtimeMetricsCollected" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.areRealtimeMetricsCollected"></a>

```csharp
public IResolvable AreRealtimeMetricsCollected { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AssetsCompartmentId`<sup>Required</sup> <a name="AssetsCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.assetsCompartmentId"></a>

```csharp
public string AssetsCompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DiscoveryCredentials`<sup>Required</sup> <a name="DiscoveryCredentials" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.discoveryCredentials"></a>

```csharp
public DataOciCloudBridgeAssetSourceDiscoveryCredentialsList DiscoveryCredentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList">DataOciCloudBridgeAssetSourceDiscoveryCredentialsList</a>

---

##### `DiscoveryScheduleId`<sup>Required</sup> <a name="DiscoveryScheduleId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.discoveryScheduleId"></a>

```csharp
public string DiscoveryScheduleId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InventoryId`<sup>Required</sup> <a name="InventoryId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.inventoryId"></a>

```csharp
public string InventoryId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ReplicationCredentials`<sup>Required</sup> <a name="ReplicationCredentials" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.replicationCredentials"></a>

```csharp
public DataOciCloudBridgeAssetSourceReplicationCredentialsList ReplicationCredentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList">DataOciCloudBridgeAssetSourceReplicationCredentialsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VcenterEndpoint`<sup>Required</sup> <a name="VcenterEndpoint" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.vcenterEndpoint"></a>

```csharp
public string VcenterEndpoint { get; }
```

- *Type:* string

---

##### `AssetSourceIdInput`<sup>Optional</sup> <a name="AssetSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.assetSourceIdInput"></a>

```csharp
public string AssetSourceIdInput { get; }
```

- *Type:* string

---

##### `AssetSourceId`<sup>Required</sup> <a name="AssetSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.assetSourceId"></a>

```csharp
public string AssetSourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudBridgeAssetSourceConfig <a name="DataOciCloudBridgeAssetSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudBridgeAssetSourceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AssetSourceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.assetSourceId">AssetSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_source#asset_source_id DataOciCloudBridgeAssetSource#asset_source_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AssetSourceId`<sup>Required</sup> <a name="AssetSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.assetSourceId"></a>

```csharp
public string AssetSourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_source#asset_source_id DataOciCloudBridgeAssetSource#asset_source_id}.

---

### DataOciCloudBridgeAssetSourceDiscoveryCredentials <a name="DataOciCloudBridgeAssetSourceDiscoveryCredentials" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudBridgeAssetSourceDiscoveryCredentials {

};
```


### DataOciCloudBridgeAssetSourceReplicationCredentials <a name="DataOciCloudBridgeAssetSourceReplicationCredentials" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudBridgeAssetSourceReplicationCredentials {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudBridgeAssetSourceDiscoveryCredentialsList <a name="DataOciCloudBridgeAssetSourceDiscoveryCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudBridgeAssetSourceDiscoveryCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.get"></a>

```csharp
private DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference <a name="DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentials">DataOciCloudBridgeAssetSourceDiscoveryCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudBridgeAssetSourceDiscoveryCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentials">DataOciCloudBridgeAssetSourceDiscoveryCredentials</a>

---


### DataOciCloudBridgeAssetSourceReplicationCredentialsList <a name="DataOciCloudBridgeAssetSourceReplicationCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudBridgeAssetSourceReplicationCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.get"></a>

```csharp
private DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference <a name="DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentials">DataOciCloudBridgeAssetSourceReplicationCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudBridgeAssetSourceReplicationCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentials">DataOciCloudBridgeAssetSourceReplicationCredentials</a>

---



