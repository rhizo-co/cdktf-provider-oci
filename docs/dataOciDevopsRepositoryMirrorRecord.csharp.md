# `dataOciDevopsRepositoryMirrorrecord` Submodule <a name="`dataOciDevopsRepositoryMirrorrecord` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsRepositoryMirrorrecord <a name="DataOciDevopsRepositoryMirrorrecord" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord oci_devops_repository_mirrorrecord}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsRepositoryMirrorrecord(Construct Scope, string Id, DataOciDevopsRepositoryMirrorrecordConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig">DataOciDevopsRepositoryMirrorrecordConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig">DataOciDevopsRepositoryMirrorrecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsRepositoryMirrorrecord resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDevopsRepositoryMirrorrecord.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDevopsRepositoryMirrorrecord.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDevopsRepositoryMirrorrecord.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDevopsRepositoryMirrorrecord.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDevopsRepositoryMirrorrecord resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDevopsRepositoryMirrorrecord to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDevopsRepositoryMirrorrecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsRepositoryMirrorrecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.enqueueTime">EnqueueTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.mirrorStatus">MirrorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.workRequestId">WorkRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.mirrorRecordTypeInput">MirrorRecordTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.mirrorRecordType">MirrorRecordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `EnqueueTime`<sup>Required</sup> <a name="EnqueueTime" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.enqueueTime"></a>

```csharp
public string EnqueueTime { get; }
```

- *Type:* string

---

##### `MirrorStatus`<sup>Required</sup> <a name="MirrorStatus" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.mirrorStatus"></a>

```csharp
public string MirrorStatus { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.workRequestId"></a>

```csharp
public string WorkRequestId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MirrorRecordTypeInput`<sup>Optional</sup> <a name="MirrorRecordTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.mirrorRecordTypeInput"></a>

```csharp
public string MirrorRecordTypeInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MirrorRecordType`<sup>Required</sup> <a name="MirrorRecordType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.mirrorRecordType"></a>

```csharp
public string MirrorRecordType { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsRepositoryMirrorrecordConfig <a name="DataOciDevopsRepositoryMirrorrecordConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsRepositoryMirrorrecordConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MirrorRecordType,
    string RepositoryId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.mirrorRecordType">MirrorRecordType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#mirror_record_type DataOciDevopsRepositoryMirrorrecord#mirror_record_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#repository_id DataOciDevopsRepositoryMirrorrecord#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#id DataOciDevopsRepositoryMirrorrecord#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MirrorRecordType`<sup>Required</sup> <a name="MirrorRecordType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.mirrorRecordType"></a>

```csharp
public string MirrorRecordType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#mirror_record_type DataOciDevopsRepositoryMirrorrecord#mirror_record_type}.

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#repository_id DataOciDevopsRepositoryMirrorrecord#repository_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#id DataOciDevopsRepositoryMirrorrecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



