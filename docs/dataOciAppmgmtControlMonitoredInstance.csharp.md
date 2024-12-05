# `dataOciAppmgmtControlMonitoredInstance` Submodule <a name="`dataOciAppmgmtControlMonitoredInstance` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAppmgmtControlMonitoredInstance <a name="DataOciAppmgmtControlMonitoredInstance" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instance oci_appmgmt_control_monitored_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAppmgmtControlMonitoredInstance(Construct Scope, string Id, DataOciAppmgmtControlMonitoredInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig">DataOciAppmgmtControlMonitoredInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig">DataOciAppmgmtControlMonitoredInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAppmgmtControlMonitoredInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAppmgmtControlMonitoredInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAppmgmtControlMonitoredInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAppmgmtControlMonitoredInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAppmgmtControlMonitoredInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciAppmgmtControlMonitoredInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAppmgmtControlMonitoredInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAppmgmtControlMonitoredInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAppmgmtControlMonitoredInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.monitoringState">MonitoringState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.monitoredInstanceIdInput">MonitoredInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.monitoredInstanceId">MonitoredInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; }
```

- *Type:* string

---

##### `MonitoringState`<sup>Required</sup> <a name="MonitoringState" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.monitoringState"></a>

```csharp
public string MonitoringState { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MonitoredInstanceIdInput`<sup>Optional</sup> <a name="MonitoredInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.monitoredInstanceIdInput"></a>

```csharp
public string MonitoredInstanceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MonitoredInstanceId`<sup>Required</sup> <a name="MonitoredInstanceId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.monitoredInstanceId"></a>

```csharp
public string MonitoredInstanceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAppmgmtControlMonitoredInstanceConfig <a name="DataOciAppmgmtControlMonitoredInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAppmgmtControlMonitoredInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MonitoredInstanceId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.monitoredInstanceId">MonitoredInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instance#monitored_instance_id DataOciAppmgmtControlMonitoredInstance#monitored_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instance#id DataOciAppmgmtControlMonitoredInstance#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MonitoredInstanceId`<sup>Required</sup> <a name="MonitoredInstanceId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.monitoredInstanceId"></a>

```csharp
public string MonitoredInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instance#monitored_instance_id DataOciAppmgmtControlMonitoredInstance#monitored_instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instance#id DataOciAppmgmtControlMonitoredInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



