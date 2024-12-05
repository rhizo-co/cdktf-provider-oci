# `dataOciStackMonitoringMonitoredResources` Submodule <a name="`dataOciStackMonitoringMonitoredResources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMonitoredResources <a name="DataOciStackMonitoringMonitoredResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources oci_stack_monitoring_monitored_resources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResources(Construct Scope, string Id, DataOciStackMonitoringMonitoredResourcesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig">DataOciStackMonitoringMonitoredResourcesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig">DataOciStackMonitoringMonitoredResourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetWorkRequestId">ResetWorkRequestId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetWorkRequestId` <a name="ResetWorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetWorkRequestId"></a>

```csharp
private void ResetWorkRequestId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciStackMonitoringMonitoredResources.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciStackMonitoringMonitoredResources.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciStackMonitoringMonitoredResources.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciStackMonitoringMonitoredResources.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResources resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciStackMonitoringMonitoredResources to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciStackMonitoringMonitoredResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMonitoredResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList">DataOciStackMonitoringMonitoredResourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.monitoredResourceCollection">MonitoredResourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.workRequestIdInput">WorkRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.workRequestId">WorkRequestId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.filter"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList">DataOciStackMonitoringMonitoredResourcesFilterList</a>

---

##### `MonitoredResourceCollection`<sup>Required</sup> <a name="MonitoredResourceCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.monitoredResourceCollection"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList MonitoredResourceCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `WorkRequestIdInput`<sup>Optional</sup> <a name="WorkRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.workRequestIdInput"></a>

```csharp
public string WorkRequestIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.workRequestId"></a>

```csharp
public string WorkRequestId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMonitoredResourcesConfig <a name="DataOciStackMonitoringMonitoredResourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object Filter = null,
    string Id = null,
    string Name = null,
    string Status = null,
    string WorkRequestId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#compartment_id DataOciStackMonitoringMonitoredResources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#id DataOciStackMonitoringMonitoredResources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#name DataOciStackMonitoringMonitoredResources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#status DataOciStackMonitoringMonitoredResources#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.workRequestId">WorkRequestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#work_request_id DataOciStackMonitoringMonitoredResources#work_request_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#compartment_id DataOciStackMonitoringMonitoredResources#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#filter DataOciStackMonitoringMonitoredResources#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#id DataOciStackMonitoringMonitoredResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#name DataOciStackMonitoringMonitoredResources#name}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#status DataOciStackMonitoringMonitoredResources#status}.

---

##### `WorkRequestId`<sup>Optional</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.workRequestId"></a>

```csharp
public string WorkRequestId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#work_request_id DataOciStackMonitoringMonitoredResources#work_request_id}.

---

### DataOciStackMonitoringMonitoredResourcesFilter <a name="DataOciStackMonitoringMonitoredResourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#name DataOciStackMonitoringMonitoredResources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#values DataOciStackMonitoringMonitoredResources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#regex DataOciStackMonitoringMonitoredResources#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#name DataOciStackMonitoringMonitoredResources#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#values DataOciStackMonitoringMonitoredResources#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#regex DataOciStackMonitoringMonitoredResources#regex}.

---

### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection {

};
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems {

};
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases {

};
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential {

};
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials {

};
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties {

};
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases {

};
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential {

};
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials {

};
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties {

};
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails {

};
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMonitoredResourcesFilterList <a name="DataOciStackMonitoringMonitoredResourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.get"></a>

```csharp
private DataOciStackMonitoringMonitoredResourcesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciStackMonitoringMonitoredResourcesFilterOutputReference <a name="DataOciStackMonitoringMonitoredResourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.get"></a>

```csharp
private DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.get"></a>

```csharp
private DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.credential">Credential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.credential"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList Credential { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.get"></a>

```csharp
private DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.properties"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList Properties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.get"></a>

```csharp
private DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.get"></a>

```csharp
private DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.get"></a>

```csharp
private DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.credential">Credential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.credential"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList Credential { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.get"></a>

```csharp
private DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.properties"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList Properties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.get"></a>

```csharp
private DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.get"></a>

```csharp
private DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.connectorId">ConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.dbId">DbId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.dbUniqueName">DbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.sslSecretId">SslSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.connectorId"></a>

```csharp
public string ConnectorId { get; }
```

- *Type:* string

---

##### `DbId`<sup>Required</sup> <a name="DbId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.dbId"></a>

```csharp
public string DbId { get; }
```

- *Type:* string

---

##### `DbUniqueName`<sup>Required</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.dbUniqueName"></a>

```csharp
public string DbUniqueName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `SslSecretId`<sup>Required</sup> <a name="SslSecretId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.sslSecretId"></a>

```csharp
public string SslSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.get"></a>

```csharp
private DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.additionalAliases">AdditionalAliases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.additionalCredentials">AdditionalCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.aliases">Aliases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.databaseConnectionDetails">DatabaseConnectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.externalResourceId">ExternalResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.license">License</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.resourceCategory">ResourceCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.resourceTimeZone">ResourceTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalAliases`<sup>Required</sup> <a name="AdditionalAliases" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.additionalAliases"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList AdditionalAliases { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList</a>

---

##### `AdditionalCredentials`<sup>Required</sup> <a name="AdditionalCredentials" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.additionalCredentials"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList AdditionalCredentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList</a>

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.aliases"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList Aliases { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.credentials"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList Credentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList</a>

---

##### `DatabaseConnectionDetails`<sup>Required</sup> <a name="DatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.databaseConnectionDetails"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList DatabaseConnectionDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `ExternalResourceId`<sup>Required</sup> <a name="ExternalResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.externalResourceId"></a>

```csharp
public string ExternalResourceId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `License`<sup>Required</sup> <a name="License" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.license"></a>

```csharp
public string License { get; }
```

- *Type:* string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.properties"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList Properties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList</a>

---

##### `ResourceCategory`<sup>Required</sup> <a name="ResourceCategory" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.resourceCategory"></a>

```csharp
public string ResourceCategory { get; }
```

- *Type:* string

---

##### `ResourceTimeZone`<sup>Required</sup> <a name="ResourceTimeZone" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.resourceTimeZone"></a>

```csharp
public string ResourceTimeZone { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.get"></a>

```csharp
private DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.get"></a>

```csharp
private DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.items"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection</a>

---



