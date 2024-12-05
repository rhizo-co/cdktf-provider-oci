# `dataOciJmsFleetAdvancedFeatureConfiguration` Submodule <a name="`dataOciJmsFleetAdvancedFeatureConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetAdvancedFeatureConfiguration <a name="DataOciJmsFleetAdvancedFeatureConfiguration" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_advanced_feature_configuration oci_jms_fleet_advanced_feature_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfiguration(Construct Scope, string Id, DataOciJmsFleetAdvancedFeatureConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig">DataOciJmsFleetAdvancedFeatureConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig">DataOciJmsFleetAdvancedFeatureConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsFleetAdvancedFeatureConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsFleetAdvancedFeatureConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsFleetAdvancedFeatureConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsFleetAdvancedFeatureConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsFleetAdvancedFeatureConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciJmsFleetAdvancedFeatureConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsFleetAdvancedFeatureConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsFleetAdvancedFeatureConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_advanced_feature_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetAdvancedFeatureConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.advancedUsageTracking">AdvancedUsageTracking</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList">DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.analyticBucketName">AnalyticBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.analyticNamespace">AnalyticNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.cryptoEventAnalysis">CryptoEventAnalysis</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList">DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.javaMigrationAnalysis">JavaMigrationAnalysis</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList">DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.jfrRecording">JfrRecording</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList">DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.lcm">Lcm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList">DataOciJmsFleetAdvancedFeatureConfigurationLcmList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.performanceTuningAnalysis">PerformanceTuningAnalysis</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList">DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.timeLastModified">TimeLastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.fleetIdInput">FleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.fleetId">FleetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AdvancedUsageTracking`<sup>Required</sup> <a name="AdvancedUsageTracking" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.advancedUsageTracking"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList AdvancedUsageTracking { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList">DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList</a>

---

##### `AnalyticBucketName`<sup>Required</sup> <a name="AnalyticBucketName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.analyticBucketName"></a>

```csharp
public string AnalyticBucketName { get; }
```

- *Type:* string

---

##### `AnalyticNamespace`<sup>Required</sup> <a name="AnalyticNamespace" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.analyticNamespace"></a>

```csharp
public string AnalyticNamespace { get; }
```

- *Type:* string

---

##### `CryptoEventAnalysis`<sup>Required</sup> <a name="CryptoEventAnalysis" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.cryptoEventAnalysis"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList CryptoEventAnalysis { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList">DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JavaMigrationAnalysis`<sup>Required</sup> <a name="JavaMigrationAnalysis" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.javaMigrationAnalysis"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList JavaMigrationAnalysis { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList">DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList</a>

---

##### `JfrRecording`<sup>Required</sup> <a name="JfrRecording" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.jfrRecording"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList JfrRecording { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList">DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList</a>

---

##### `Lcm`<sup>Required</sup> <a name="Lcm" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.lcm"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationLcmList Lcm { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList">DataOciJmsFleetAdvancedFeatureConfigurationLcmList</a>

---

##### `PerformanceTuningAnalysis`<sup>Required</sup> <a name="PerformanceTuningAnalysis" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.performanceTuningAnalysis"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList PerformanceTuningAnalysis { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList">DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList</a>

---

##### `TimeLastModified`<sup>Required</sup> <a name="TimeLastModified" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.timeLastModified"></a>

```csharp
public string TimeLastModified { get; }
```

- *Type:* string

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.fleetIdInput"></a>

```csharp
public string FleetIdInput { get; }
```

- *Type:* string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.fleetId"></a>

```csharp
public string FleetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking <a name="DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking {

};
```


### DataOciJmsFleetAdvancedFeatureConfigurationConfig <a name="DataOciJmsFleetAdvancedFeatureConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FleetId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.property.fleetId">FleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_advanced_feature_configuration#fleet_id DataOciJmsFleetAdvancedFeatureConfiguration#fleet_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationConfig.property.fleetId"></a>

```csharp
public string FleetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_advanced_feature_configuration#fleet_id DataOciJmsFleetAdvancedFeatureConfiguration#fleet_id}.

---

### DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis <a name="DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis {

};
```


### DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog <a name="DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog {

};
```


### DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis <a name="DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis {

};
```


### DataOciJmsFleetAdvancedFeatureConfigurationJfrRecording <a name="DataOciJmsFleetAdvancedFeatureConfigurationJfrRecording" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecording"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecording.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationJfrRecording {

};
```


### DataOciJmsFleetAdvancedFeatureConfigurationLcm <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcm" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcm {

};
```


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions {

};
```


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings {

};
```


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath {

};
```


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar {

};
```


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls {

};
```


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies {

};
```


### DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis <a name="DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList <a name="DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.get"></a>

```csharp
private DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference <a name="DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking">DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTrackingOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking">DataOciJmsFleetAdvancedFeatureConfigurationAdvancedUsageTracking</a>

---


### DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList <a name="DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.get"></a>

```csharp
private DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference <a name="DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.summarizedEventsLog">SummarizedEventsLog</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList">DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis">DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SummarizedEventsLog`<sup>Required</sup> <a name="SummarizedEventsLog" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.summarizedEventsLog"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList SummarizedEventsLog { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList">DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis">DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysis</a>

---


### DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList <a name="DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.get"></a>

```csharp
private DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference <a name="DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logId">LogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog">DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.logId"></a>

```csharp
public string LogId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLogOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog">DataOciJmsFleetAdvancedFeatureConfigurationCryptoEventAnalysisSummarizedEventsLog</a>

---


### DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList <a name="DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.get"></a>

```csharp
private DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference <a name="DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis">DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysisOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis">DataOciJmsFleetAdvancedFeatureConfigurationJavaMigrationAnalysis</a>

---


### DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList <a name="DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.get"></a>

```csharp
private DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference <a name="DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecording">DataOciJmsFleetAdvancedFeatureConfigurationJfrRecording</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecordingOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationJfrRecording InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationJfrRecording">DataOciJmsFleetAdvancedFeatureConfigurationJfrRecording</a>

---


### DataOciJmsFleetAdvancedFeatureConfigurationLcmList <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.get"></a>

```csharp
private DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.postInstallationActions">PostInstallationActions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcm">DataOciJmsFleetAdvancedFeatureConfigurationLcm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PostInstallationActions`<sup>Required</sup> <a name="PostInstallationActions" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.postInstallationActions"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList PostInstallationActions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationLcm InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcm">DataOciJmsFleetAdvancedFeatureConfigurationLcm</a>

---


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.get"></a>

```csharp
private DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.get"></a>

```csharp
private DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.keySize">KeySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.keySize"></a>

```csharp
public double KeySize { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpath</a>

---


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.get"></a>

```csharp
private DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.keySize">KeySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.keySize"></a>

```csharp
public double KeySize { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJar</a>

---


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.get"></a>

```csharp
private DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.certpath">Certpath</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.jar">Jar</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.tls">Tls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Certpath`<sup>Required</sup> <a name="Certpath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.certpath"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList Certpath { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsCertpathList</a>

---

##### `Jar`<sup>Required</sup> <a name="Jar" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.jar"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList Jar { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsJarList</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.tls"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList Tls { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettings</a>

---


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.get"></a>

```csharp
private DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.keySize">KeySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.keySize"></a>

```csharp
public double KeySize { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTlsOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsTls</a>

---


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.addLoggingHandler">AddLoggingHandler</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.disabledTlsVersions">DisabledTlsVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.globalLoggingLevel">GlobalLoggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.minimumKeySizeSettings">MinimumKeySizeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.proxies">Proxies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.shouldReplaceCertificatesOperatingSystem">ShouldReplaceCertificatesOperatingSystem</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddLoggingHandler`<sup>Required</sup> <a name="AddLoggingHandler" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.addLoggingHandler"></a>

```csharp
public IResolvable AddLoggingHandler { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DisabledTlsVersions`<sup>Required</sup> <a name="DisabledTlsVersions" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.disabledTlsVersions"></a>

```csharp
public string[] DisabledTlsVersions { get; }
```

- *Type:* string[]

---

##### `GlobalLoggingLevel`<sup>Required</sup> <a name="GlobalLoggingLevel" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.globalLoggingLevel"></a>

```csharp
public string GlobalLoggingLevel { get; }
```

- *Type:* string

---

##### `MinimumKeySizeSettings`<sup>Required</sup> <a name="MinimumKeySizeSettings" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.minimumKeySizeSettings"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList MinimumKeySizeSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsMinimumKeySizeSettingsList</a>

---

##### `Proxies`<sup>Required</sup> <a name="Proxies" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.proxies"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList Proxies { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList</a>

---

##### `ShouldReplaceCertificatesOperatingSystem`<sup>Required</sup> <a name="ShouldReplaceCertificatesOperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.shouldReplaceCertificatesOperatingSystem"></a>

```csharp
public IResolvable ShouldReplaceCertificatesOperatingSystem { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActions</a>

---


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.get"></a>

```csharp
private DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference <a name="DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyHost">FtpProxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyPort">FtpProxyPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyHost">HttpProxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyPort">HttpProxyPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyHost">HttpsProxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyPort">HttpsProxyPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyHost">SocksProxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyPort">SocksProxyPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.useSystemProxies">UseSystemProxies</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FtpProxyHost`<sup>Required</sup> <a name="FtpProxyHost" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyHost"></a>

```csharp
public string FtpProxyHost { get; }
```

- *Type:* string

---

##### `FtpProxyPort`<sup>Required</sup> <a name="FtpProxyPort" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.ftpProxyPort"></a>

```csharp
public double FtpProxyPort { get; }
```

- *Type:* double

---

##### `HttpProxyHost`<sup>Required</sup> <a name="HttpProxyHost" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyHost"></a>

```csharp
public string HttpProxyHost { get; }
```

- *Type:* string

---

##### `HttpProxyPort`<sup>Required</sup> <a name="HttpProxyPort" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpProxyPort"></a>

```csharp
public double HttpProxyPort { get; }
```

- *Type:* double

---

##### `HttpsProxyHost`<sup>Required</sup> <a name="HttpsProxyHost" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyHost"></a>

```csharp
public string HttpsProxyHost { get; }
```

- *Type:* string

---

##### `HttpsProxyPort`<sup>Required</sup> <a name="HttpsProxyPort" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.httpsProxyPort"></a>

```csharp
public double HttpsProxyPort { get; }
```

- *Type:* double

---

##### `SocksProxyHost`<sup>Required</sup> <a name="SocksProxyHost" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyHost"></a>

```csharp
public string SocksProxyHost { get; }
```

- *Type:* string

---

##### `SocksProxyPort`<sup>Required</sup> <a name="SocksProxyPort" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.socksProxyPort"></a>

```csharp
public double SocksProxyPort { get; }
```

- *Type:* double

---

##### `UseSystemProxies`<sup>Required</sup> <a name="UseSystemProxies" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.useSystemProxies"></a>

```csharp
public IResolvable UseSystemProxies { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxiesOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies">DataOciJmsFleetAdvancedFeatureConfigurationLcmPostInstallationActionsProxies</a>

---


### DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList <a name="DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.get"></a>

```csharp
private DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference <a name="DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis">DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysisOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetAdvancedFeatureConfiguration.DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis">DataOciJmsFleetAdvancedFeatureConfigurationPerformanceTuningAnalysis</a>

---



