# `dataOciVbsInstVbsInstances` Submodule <a name="`dataOciVbsInstVbsInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciVbsInstVbsInstances <a name="DataOciVbsInstVbsInstances" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances oci_vbs_inst_vbs_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVbsInstVbsInstances(Construct Scope, string Id, DataOciVbsInstVbsInstancesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig">DataOciVbsInstVbsInstancesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig">DataOciVbsInstVbsInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciVbsInstVbsInstances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVbsInstVbsInstances.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVbsInstVbsInstances.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVbsInstVbsInstances.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVbsInstVbsInstances.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciVbsInstVbsInstances resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciVbsInstVbsInstances to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciVbsInstVbsInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciVbsInstVbsInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList">DataOciVbsInstVbsInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.vbsInstanceSummaryCollection">VbsInstanceSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList">DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.filter"></a>

```csharp
public DataOciVbsInstVbsInstancesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList">DataOciVbsInstVbsInstancesFilterList</a>

---

##### `VbsInstanceSummaryCollection`<sup>Required</sup> <a name="VbsInstanceSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.vbsInstanceSummaryCollection"></a>

```csharp
public DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList VbsInstanceSummaryCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList">DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciVbsInstVbsInstancesConfig <a name="DataOciVbsInstVbsInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVbsInstVbsInstancesConfig {
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
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#compartment_id DataOciVbsInstVbsInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#id DataOciVbsInstVbsInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#name DataOciVbsInstVbsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#state DataOciVbsInstVbsInstances#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#compartment_id DataOciVbsInstVbsInstances#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#filter DataOciVbsInstVbsInstances#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#id DataOciVbsInstVbsInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#name DataOciVbsInstVbsInstances#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#state DataOciVbsInstVbsInstances#state}.

---

### DataOciVbsInstVbsInstancesFilter <a name="DataOciVbsInstVbsInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVbsInstVbsInstancesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#name DataOciVbsInstVbsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#values DataOciVbsInstVbsInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#regex DataOciVbsInstVbsInstances#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#name DataOciVbsInstVbsInstances#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#values DataOciVbsInstVbsInstances#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#regex DataOciVbsInstVbsInstances#regex}.

---

### DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection <a name="DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection {

};
```


### DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems <a name="DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciVbsInstVbsInstancesFilterList <a name="DataOciVbsInstVbsInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVbsInstVbsInstancesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.get"></a>

```csharp
private DataOciVbsInstVbsInstancesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciVbsInstVbsInstancesFilterOutputReference <a name="DataOciVbsInstVbsInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVbsInstVbsInstancesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList <a name="DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.get"></a>

```csharp
private DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference <a name="DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.idcsAccessToken">IdcsAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.isResourceUsageAgreementGranted">IsResourceUsageAgreementGranted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.lifecyleDetails">LifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.resourceCompartmentId">ResourceCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.vbsAccessUrl">VbsAccessUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems">DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsAccessToken`<sup>Required</sup> <a name="IdcsAccessToken" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.idcsAccessToken"></a>

```csharp
public string IdcsAccessToken { get; }
```

- *Type:* string

---

##### `IsResourceUsageAgreementGranted`<sup>Required</sup> <a name="IsResourceUsageAgreementGranted" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.isResourceUsageAgreementGranted"></a>

```csharp
public IResolvable IsResourceUsageAgreementGranted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecyleDetails`<sup>Required</sup> <a name="LifecyleDetails" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.lifecyleDetails"></a>

```csharp
public string LifecyleDetails { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceCompartmentId`<sup>Required</sup> <a name="ResourceCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.resourceCompartmentId"></a>

```csharp
public string ResourceCompartmentId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `VbsAccessUrl`<sup>Required</sup> <a name="VbsAccessUrl" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.vbsAccessUrl"></a>

```csharp
public string VbsAccessUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems">DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems</a>

---


### DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList <a name="DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.get"></a>

```csharp
private DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference <a name="DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList">DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection">DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.property.items"></a>

```csharp
public DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList">DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection">DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection</a>

---



