# `dataOciHealthChecksHttpMonitor` Submodule <a name="`dataOciHealthChecksHttpMonitor` Submodule" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciHealthChecksHttpMonitor <a name="DataOciHealthChecksHttpMonitor" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitor oci_health_checks_http_monitor}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciHealthChecksHttpMonitor(Construct Scope, string Id, DataOciHealthChecksHttpMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig">DataOciHealthChecksHttpMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig">DataOciHealthChecksHttpMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciHealthChecksHttpMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciHealthChecksHttpMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciHealthChecksHttpMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciHealthChecksHttpMonitor.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciHealthChecksHttpMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciHealthChecksHttpMonitor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciHealthChecksHttpMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciHealthChecksHttpMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciHealthChecksHttpMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.headers">Headers</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.homeRegion">HomeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.resultsUrl">ResultsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.targets">Targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.vantagePointNames">VantagePointNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.monitorIdInput">MonitorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.monitorId">MonitorId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.headers"></a>

```csharp
public StringMap Headers { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HomeRegion`<sup>Required</sup> <a name="HomeRegion" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.homeRegion"></a>

```csharp
public string HomeRegion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.intervalInSeconds"></a>

```csharp
public double IntervalInSeconds { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Method`<sup>Required</sup> <a name="Method" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ResultsUrl`<sup>Required</sup> <a name="ResultsUrl" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.resultsUrl"></a>

```csharp
public string ResultsUrl { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.targets"></a>

```csharp
public string[] Targets { get; }
```

- *Type:* string[]

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `VantagePointNames`<sup>Required</sup> <a name="VantagePointNames" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.vantagePointNames"></a>

```csharp
public string[] VantagePointNames { get; }
```

- *Type:* string[]

---

##### `MonitorIdInput`<sup>Optional</sup> <a name="MonitorIdInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.monitorIdInput"></a>

```csharp
public string MonitorIdInput { get; }
```

- *Type:* string

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.monitorId"></a>

```csharp
public string MonitorId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciHealthChecksHttpMonitorConfig <a name="DataOciHealthChecksHttpMonitorConfig" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciHealthChecksHttpMonitorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MonitorId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.monitorId">MonitorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitor#monitor_id DataOciHealthChecksHttpMonitor#monitor_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.monitorId"></a>

```csharp
public string MonitorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitor#monitor_id DataOciHealthChecksHttpMonitor#monitor_id}.

---



