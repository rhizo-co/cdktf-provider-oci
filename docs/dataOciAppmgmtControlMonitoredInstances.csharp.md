# `dataOciAppmgmtControlMonitoredInstances` Submodule <a name="`dataOciAppmgmtControlMonitoredInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAppmgmtControlMonitoredInstances <a name="DataOciAppmgmtControlMonitoredInstances" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances oci_appmgmt_control_monitored_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAppmgmtControlMonitoredInstances(Construct Scope, string Id, DataOciAppmgmtControlMonitoredInstancesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig">DataOciAppmgmtControlMonitoredInstancesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig">DataOciAppmgmtControlMonitoredInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAppmgmtControlMonitoredInstances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAppmgmtControlMonitoredInstances.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAppmgmtControlMonitoredInstances.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAppmgmtControlMonitoredInstances.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAppmgmtControlMonitoredInstances.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciAppmgmtControlMonitoredInstances resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAppmgmtControlMonitoredInstances to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAppmgmtControlMonitoredInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAppmgmtControlMonitoredInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList">DataOciAppmgmtControlMonitoredInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.monitoredInstanceCollection">MonitoredInstanceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList">DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.filter"></a>

```csharp
public DataOciAppmgmtControlMonitoredInstancesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList">DataOciAppmgmtControlMonitoredInstancesFilterList</a>

---

##### `MonitoredInstanceCollection`<sup>Required</sup> <a name="MonitoredInstanceCollection" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.monitoredInstanceCollection"></a>

```csharp
public DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList MonitoredInstanceCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList">DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAppmgmtControlMonitoredInstancesConfig <a name="DataOciAppmgmtControlMonitoredInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAppmgmtControlMonitoredInstancesConfig {
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
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#compartment_id DataOciAppmgmtControlMonitoredInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#display_name DataOciAppmgmtControlMonitoredInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#id DataOciAppmgmtControlMonitoredInstances#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#compartment_id DataOciAppmgmtControlMonitoredInstances#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#display_name DataOciAppmgmtControlMonitoredInstances#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#filter DataOciAppmgmtControlMonitoredInstances#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#id DataOciAppmgmtControlMonitoredInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciAppmgmtControlMonitoredInstancesFilter <a name="DataOciAppmgmtControlMonitoredInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAppmgmtControlMonitoredInstancesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#name DataOciAppmgmtControlMonitoredInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#values DataOciAppmgmtControlMonitoredInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#regex DataOciAppmgmtControlMonitoredInstances#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#name DataOciAppmgmtControlMonitoredInstances#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#values DataOciAppmgmtControlMonitoredInstances#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#regex DataOciAppmgmtControlMonitoredInstances#regex}.

---

### DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection <a name="DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection {

};
```


### DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems <a name="DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAppmgmtControlMonitoredInstancesFilterList <a name="DataOciAppmgmtControlMonitoredInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAppmgmtControlMonitoredInstancesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.get"></a>

```csharp
private DataOciAppmgmtControlMonitoredInstancesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciAppmgmtControlMonitoredInstancesFilterOutputReference <a name="DataOciAppmgmtControlMonitoredInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAppmgmtControlMonitoredInstancesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList <a name="DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.get"></a>

```csharp
private DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference <a name="DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.monitoringState">MonitoringState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems">DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; }
```

- *Type:* string

---

##### `MonitoringState`<sup>Required</sup> <a name="MonitoringState" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.monitoringState"></a>

```csharp
public string MonitoringState { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems">DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems</a>

---


### DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList <a name="DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.get"></a>

```csharp
private DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference <a name="DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList">DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection">DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.property.items"></a>

```csharp
public DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList">DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection">DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection</a>

---



