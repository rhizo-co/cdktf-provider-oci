# `dataOciMediaServicesStreamCdnConfig` Submodule <a name="`dataOciMediaServicesStreamCdnConfig` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesStreamCdnConfig <a name="DataOciMediaServicesStreamCdnConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_config oci_media_services_stream_cdn_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamCdnConfig(Construct Scope, string Id, DataOciMediaServicesStreamCdnConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig">DataOciMediaServicesStreamCdnConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig">DataOciMediaServicesStreamCdnConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesStreamCdnConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesStreamCdnConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesStreamCdnConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesStreamCdnConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMediaServicesStreamCdnConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMediaServicesStreamCdnConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMediaServicesStreamCdnConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMediaServicesStreamCdnConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesStreamCdnConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList">DataOciMediaServicesStreamCdnConfigConfigAList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.distributionChannelId">DistributionChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.isLockOverride">IsLockOverride</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.lifecyleDetails">LifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList">DataOciMediaServicesStreamCdnConfigLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.streamCdnConfigIdInput">StreamCdnConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.streamCdnConfigId">StreamCdnConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.config"></a>

```csharp
public DataOciMediaServicesStreamCdnConfigConfigAList Config { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList">DataOciMediaServicesStreamCdnConfigConfigAList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DistributionChannelId`<sup>Required</sup> <a name="DistributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.distributionChannelId"></a>

```csharp
public string DistributionChannelId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.isLockOverride"></a>

```csharp
public IResolvable IsLockOverride { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecyleDetails`<sup>Required</sup> <a name="LifecyleDetails" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.lifecyleDetails"></a>

```csharp
public string LifecyleDetails { get; }
```

- *Type:* string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.locks"></a>

```csharp
public DataOciMediaServicesStreamCdnConfigLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList">DataOciMediaServicesStreamCdnConfigLocksList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `StreamCdnConfigIdInput`<sup>Optional</sup> <a name="StreamCdnConfigIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.streamCdnConfigIdInput"></a>

```csharp
public string StreamCdnConfigIdInput { get; }
```

- *Type:* string

---

##### `StreamCdnConfigId`<sup>Required</sup> <a name="StreamCdnConfigId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.streamCdnConfigId"></a>

```csharp
public string StreamCdnConfigId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesStreamCdnConfigConfig <a name="DataOciMediaServicesStreamCdnConfigConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamCdnConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string StreamCdnConfigId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.streamCdnConfigId">StreamCdnConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_config#stream_cdn_config_id DataOciMediaServicesStreamCdnConfig#stream_cdn_config_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `StreamCdnConfigId`<sup>Required</sup> <a name="StreamCdnConfigId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.streamCdnConfigId"></a>

```csharp
public string StreamCdnConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_config#stream_cdn_config_id DataOciMediaServicesStreamCdnConfig#stream_cdn_config_id}.

---

### DataOciMediaServicesStreamCdnConfigConfigA <a name="DataOciMediaServicesStreamCdnConfigConfigA" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamCdnConfigConfigA {

};
```


### DataOciMediaServicesStreamCdnConfigLocks <a name="DataOciMediaServicesStreamCdnConfigLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamCdnConfigLocks {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesStreamCdnConfigConfigAList <a name="DataOciMediaServicesStreamCdnConfigConfigAList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamCdnConfigConfigAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.get"></a>

```csharp
private DataOciMediaServicesStreamCdnConfigConfigAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMediaServicesStreamCdnConfigConfigAOutputReference <a name="DataOciMediaServicesStreamCdnConfigConfigAOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamCdnConfigConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostname">EdgeHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefix">EdgePathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKey">EdgeTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSalt">EdgeTokenSalt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuth">IsEdgeTokenAuth</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyA">OriginAuthSecretKeyA</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyB">OriginAuthSecretKeyB</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceA">OriginAuthSecretKeyNonceA</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceB">OriginAuthSecretKeyNonceB</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryption">OriginAuthSignEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignType">OriginAuthSignType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigA">DataOciMediaServicesStreamCdnConfigConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EdgeHostname`<sup>Required</sup> <a name="EdgeHostname" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostname"></a>

```csharp
public string EdgeHostname { get; }
```

- *Type:* string

---

##### `EdgePathPrefix`<sup>Required</sup> <a name="EdgePathPrefix" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefix"></a>

```csharp
public string EdgePathPrefix { get; }
```

- *Type:* string

---

##### `EdgeTokenKey`<sup>Required</sup> <a name="EdgeTokenKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKey"></a>

```csharp
public string EdgeTokenKey { get; }
```

- *Type:* string

---

##### `EdgeTokenSalt`<sup>Required</sup> <a name="EdgeTokenSalt" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSalt"></a>

```csharp
public string EdgeTokenSalt { get; }
```

- *Type:* string

---

##### `IsEdgeTokenAuth`<sup>Required</sup> <a name="IsEdgeTokenAuth" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuth"></a>

```csharp
public IResolvable IsEdgeTokenAuth { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OriginAuthSecretKeyA`<sup>Required</sup> <a name="OriginAuthSecretKeyA" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyA"></a>

```csharp
public string OriginAuthSecretKeyA { get; }
```

- *Type:* string

---

##### `OriginAuthSecretKeyB`<sup>Required</sup> <a name="OriginAuthSecretKeyB" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyB"></a>

```csharp
public string OriginAuthSecretKeyB { get; }
```

- *Type:* string

---

##### `OriginAuthSecretKeyNonceA`<sup>Required</sup> <a name="OriginAuthSecretKeyNonceA" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceA"></a>

```csharp
public string OriginAuthSecretKeyNonceA { get; }
```

- *Type:* string

---

##### `OriginAuthSecretKeyNonceB`<sup>Required</sup> <a name="OriginAuthSecretKeyNonceB" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceB"></a>

```csharp
public string OriginAuthSecretKeyNonceB { get; }
```

- *Type:* string

---

##### `OriginAuthSignEncryption`<sup>Required</sup> <a name="OriginAuthSignEncryption" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryption"></a>

```csharp
public string OriginAuthSignEncryption { get; }
```

- *Type:* string

---

##### `OriginAuthSignType`<sup>Required</sup> <a name="OriginAuthSignType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignType"></a>

```csharp
public string OriginAuthSignType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.internalValue"></a>

```csharp
public DataOciMediaServicesStreamCdnConfigConfigA InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigA">DataOciMediaServicesStreamCdnConfigConfigA</a>

---


### DataOciMediaServicesStreamCdnConfigLocksList <a name="DataOciMediaServicesStreamCdnConfigLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamCdnConfigLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.get"></a>

```csharp
private DataOciMediaServicesStreamCdnConfigLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMediaServicesStreamCdnConfigLocksOutputReference <a name="DataOciMediaServicesStreamCdnConfigLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMediaServicesStreamCdnConfigLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocks">DataOciMediaServicesStreamCdnConfigLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.internalValue"></a>

```csharp
public DataOciMediaServicesStreamCdnConfigLocks InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocks">DataOciMediaServicesStreamCdnConfigLocks</a>

---



