# `dataOciAutoscalingAutoScalingConfiguration` Submodule <a name="`dataOciAutoscalingAutoScalingConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAutoscalingAutoScalingConfiguration <a name="DataOciAutoscalingAutoScalingConfiguration" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configuration oci_autoscaling_auto_scaling_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfiguration(Construct Scope, string Id, DataOciAutoscalingAutoScalingConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig">DataOciAutoscalingAutoScalingConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig">DataOciAutoscalingAutoScalingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAutoscalingAutoScalingConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAutoscalingAutoScalingConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAutoscalingAutoScalingConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAutoscalingAutoScalingConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAutoscalingAutoScalingConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciAutoscalingAutoScalingConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAutoscalingAutoScalingConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAutoscalingAutoScalingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAutoscalingAutoScalingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingResources">AutoScalingResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList">DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.coolDownInSeconds">CoolDownInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.maxResourceCount">MaxResourceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.minResourceCount">MinResourceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.policies">Policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList">DataOciAutoscalingAutoScalingConfigurationPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingConfigurationIdInput">AutoScalingConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingConfigurationId">AutoScalingConfigurationId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutoScalingResources`<sup>Required</sup> <a name="AutoScalingResources" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingResources"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList AutoScalingResources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList">DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CoolDownInSeconds`<sup>Required</sup> <a name="CoolDownInSeconds" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.coolDownInSeconds"></a>

```csharp
public double CoolDownInSeconds { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxResourceCount`<sup>Required</sup> <a name="MaxResourceCount" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.maxResourceCount"></a>

```csharp
public double MaxResourceCount { get; }
```

- *Type:* double

---

##### `MinResourceCount`<sup>Required</sup> <a name="MinResourceCount" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.minResourceCount"></a>

```csharp
public double MinResourceCount { get; }
```

- *Type:* double

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.policies"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationPoliciesList Policies { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList">DataOciAutoscalingAutoScalingConfigurationPoliciesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `AutoScalingConfigurationIdInput`<sup>Optional</sup> <a name="AutoScalingConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingConfigurationIdInput"></a>

```csharp
public string AutoScalingConfigurationIdInput { get; }
```

- *Type:* string

---

##### `AutoScalingConfigurationId`<sup>Required</sup> <a name="AutoScalingConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingConfigurationId"></a>

```csharp
public string AutoScalingConfigurationId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAutoscalingAutoScalingConfigurationAutoScalingResources <a name="DataOciAutoscalingAutoScalingConfigurationAutoScalingResources" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationAutoScalingResources {

};
```


### DataOciAutoscalingAutoScalingConfigurationConfig <a name="DataOciAutoscalingAutoScalingConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutoScalingConfigurationId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.autoScalingConfigurationId">AutoScalingConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configuration#auto_scaling_configuration_id DataOciAutoscalingAutoScalingConfiguration#auto_scaling_configuration_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutoScalingConfigurationId`<sup>Required</sup> <a name="AutoScalingConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.autoScalingConfigurationId"></a>

```csharp
public string AutoScalingConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configuration#auto_scaling_configuration_id DataOciAutoscalingAutoScalingConfiguration#auto_scaling_configuration_id}.

---

### DataOciAutoscalingAutoScalingConfigurationPolicies <a name="DataOciAutoscalingAutoScalingConfigurationPolicies" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPolicies {

};
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity {

};
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule {

};
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction {

};
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesRules <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRules" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesRules {

};
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction {

};
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric {

};
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList <a name="DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResources">DataOciAutoscalingAutoScalingConfigurationAutoScalingResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationAutoScalingResources InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResources">DataOciAutoscalingAutoScalingConfigurationAutoScalingResources</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.initial">Initial</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity">DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Initial`<sup>Required</sup> <a name="Initial" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.initial"></a>

```csharp
public double Initial { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity">DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.capacity">Capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList">DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.executionSchedule">ExecutionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList">DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.resourceAction">ResourceAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList">DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPolicies">DataOciAutoscalingAutoScalingConfigurationPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.capacity"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList Capacity { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList">DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExecutionSchedule`<sup>Required</sup> <a name="ExecutionSchedule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.executionSchedule"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList ExecutionSchedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList">DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `ResourceAction`<sup>Required</sup> <a name="ResourceAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.resourceAction"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList ResourceAction { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList">DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.rules"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationPolicies InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPolicies">DataOciAutoscalingAutoScalingConfigurationPolicies</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionType">ActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction">DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionType"></a>

```csharp
public string ActionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction">DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.metricType">MetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.metricType"></a>

```csharp
public string MetricType { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.threshold"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList Threshold { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.get"></a>

```csharp
private DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.action">Action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRules">DataOciAutoscalingAutoScalingConfigurationPoliciesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.action"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList Action { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.metric"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList Metric { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciAutoscalingAutoScalingConfigurationPoliciesRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRules">DataOciAutoscalingAutoScalingConfigurationPoliciesRules</a>

---



