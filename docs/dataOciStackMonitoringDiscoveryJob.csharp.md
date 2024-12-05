# `dataOciStackMonitoringDiscoveryJob` Submodule <a name="`dataOciStackMonitoringDiscoveryJob` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringDiscoveryJob <a name="DataOciStackMonitoringDiscoveryJob" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job oci_stack_monitoring_discovery_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJob(Construct Scope, string Id, DataOciStackMonitoringDiscoveryJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig">DataOciStackMonitoringDiscoveryJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig">DataOciStackMonitoringDiscoveryJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringDiscoveryJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciStackMonitoringDiscoveryJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciStackMonitoringDiscoveryJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciStackMonitoringDiscoveryJob.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciStackMonitoringDiscoveryJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciStackMonitoringDiscoveryJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciStackMonitoringDiscoveryJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciStackMonitoringDiscoveryJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringDiscoveryJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryClient">DiscoveryClient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryDetails">DiscoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryType">DiscoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.shouldPropagateTagsToDiscoveredResources">ShouldPropagateTagsToDiscoveredResources</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryJobIdInput">DiscoveryJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryJobId">DiscoveryJobId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DiscoveryClient`<sup>Required</sup> <a name="DiscoveryClient" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryClient"></a>

```csharp
public string DiscoveryClient { get; }
```

- *Type:* string

---

##### `DiscoveryDetails`<sup>Required</sup> <a name="DiscoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryDetails"></a>

```csharp
public DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList DiscoveryDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList</a>

---

##### `DiscoveryType`<sup>Required</sup> <a name="DiscoveryType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryType"></a>

```csharp
public string DiscoveryType { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ShouldPropagateTagsToDiscoveredResources`<sup>Required</sup> <a name="ShouldPropagateTagsToDiscoveredResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.shouldPropagateTagsToDiscoveredResources"></a>

```csharp
public IResolvable ShouldPropagateTagsToDiscoveredResources { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `DiscoveryJobIdInput`<sup>Optional</sup> <a name="DiscoveryJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryJobIdInput"></a>

```csharp
public string DiscoveryJobIdInput { get; }
```

- *Type:* string

---

##### `DiscoveryJobId`<sup>Required</sup> <a name="DiscoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryJobId"></a>

```csharp
public string DiscoveryJobId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringDiscoveryJobConfig <a name="DataOciStackMonitoringDiscoveryJobConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DiscoveryJobId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.discoveryJobId">DiscoveryJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job#discovery_job_id DataOciStackMonitoringDiscoveryJob#discovery_job_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DiscoveryJobId`<sup>Required</sup> <a name="DiscoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.discoveryJobId"></a>

```csharp
public string DiscoveryJobId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job#discovery_job_id DataOciStackMonitoringDiscoveryJob#discovery_job_id}.

---

### DataOciStackMonitoringDiscoveryJobDiscoveryDetails <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetails {

};
```


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials {

};
```


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems {

};
```


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties {

};
```


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties {

};
```


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.get"></a>

```csharp
private DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialName">CredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialName"></a>

```csharp
public string CredentialName { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.properties"></a>

```csharp
public DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList Properties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems</a>

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.get"></a>

```csharp
private DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.propertiesMap">PropertiesMap</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropertiesMap`<sup>Required</sup> <a name="PropertiesMap" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.propertiesMap"></a>

```csharp
public StringMap PropertiesMap { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a>

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.get"></a>

```csharp
private DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.items"></a>

```csharp
public DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a>

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.get"></a>

```csharp
private DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.license">License</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetails">DataOciStackMonitoringDiscoveryJobDiscoveryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.credentials"></a>

```csharp
public DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList Credentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList</a>

---

##### `License`<sup>Required</sup> <a name="License" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.license"></a>

```csharp
public string License { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.properties"></a>

```csharp
public DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList Properties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList</a>

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.tags"></a>

```csharp
public DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringDiscoveryJobDiscoveryDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetails">DataOciStackMonitoringDiscoveryJobDiscoveryDetails</a>

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.get"></a>

```csharp
private DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.propertiesMap">PropertiesMap</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropertiesMap`<sup>Required</sup> <a name="PropertiesMap" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.propertiesMap"></a>

```csharp
public StringMap PropertiesMap { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties</a>

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.get"></a>

```csharp
private DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.propertiesMap">PropertiesMap</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropertiesMap`<sup>Required</sup> <a name="PropertiesMap" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.propertiesMap"></a>

```csharp
public StringMap PropertiesMap { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags</a>

---



