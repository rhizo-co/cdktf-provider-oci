# `dataOciCloudBridgeDiscoverySchedule` Submodule <a name="`dataOciCloudBridgeDiscoverySchedule` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudBridgeDiscoverySchedule <a name="DataOciCloudBridgeDiscoverySchedule" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedule oci_cloud_bridge_discovery_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudBridgeDiscoverySchedule(Construct Scope, string Id, DataOciCloudBridgeDiscoveryScheduleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig">DataOciCloudBridgeDiscoveryScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig">DataOciCloudBridgeDiscoveryScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudBridgeDiscoverySchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudBridgeDiscoverySchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudBridgeDiscoverySchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudBridgeDiscoverySchedule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudBridgeDiscoverySchedule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCloudBridgeDiscoverySchedule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudBridgeDiscoverySchedule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudBridgeDiscoverySchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudBridgeDiscoverySchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.executionRecurrences">ExecutionRecurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.discoveryScheduleIdInput">DiscoveryScheduleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.discoveryScheduleId">DiscoveryScheduleId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExecutionRecurrences`<sup>Required</sup> <a name="ExecutionRecurrences" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.executionRecurrences"></a>

```csharp
public string ExecutionRecurrences { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `DiscoveryScheduleIdInput`<sup>Optional</sup> <a name="DiscoveryScheduleIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.discoveryScheduleIdInput"></a>

```csharp
public string DiscoveryScheduleIdInput { get; }
```

- *Type:* string

---

##### `DiscoveryScheduleId`<sup>Required</sup> <a name="DiscoveryScheduleId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.discoveryScheduleId"></a>

```csharp
public string DiscoveryScheduleId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoverySchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudBridgeDiscoveryScheduleConfig <a name="DataOciCloudBridgeDiscoveryScheduleConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudBridgeDiscoveryScheduleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DiscoveryScheduleId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.property.discoveryScheduleId">DiscoveryScheduleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedule#discovery_schedule_id DataOciCloudBridgeDiscoverySchedule#discovery_schedule_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DiscoveryScheduleId`<sup>Required</sup> <a name="DiscoveryScheduleId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeDiscoverySchedule.DataOciCloudBridgeDiscoveryScheduleConfig.property.discoveryScheduleId"></a>

```csharp
public string DiscoveryScheduleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_discovery_schedule#discovery_schedule_id DataOciCloudBridgeDiscoverySchedule#discovery_schedule_id}.

---



