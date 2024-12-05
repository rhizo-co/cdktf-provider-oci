# `dataOciBdsBdsInstanceGetOsPatch` Submodule <a name="`dataOciBdsBdsInstanceGetOsPatch` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceGetOsPatch <a name="DataOciBdsBdsInstanceGetOsPatch" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch oci_bds_bds_instance_get_os_patch}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceGetOsPatch(Construct Scope, string Id, DataOciBdsBdsInstanceGetOsPatchConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig">DataOciBdsBdsInstanceGetOsPatchConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig">DataOciBdsBdsInstanceGetOsPatchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceGetOsPatch resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsBdsInstanceGetOsPatch.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsBdsInstanceGetOsPatch.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsBdsInstanceGetOsPatch.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsBdsInstanceGetOsPatch.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceGetOsPatch resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBdsBdsInstanceGetOsPatch to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBdsBdsInstanceGetOsPatch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceGetOsPatch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList">DataOciBdsBdsInstanceGetOsPatchFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.minBdsVersion">MinBdsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.minCompatibleOdhVersionMap">MinCompatibleOdhVersionMap</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.patchType">PatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.releaseDate">ReleaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.targetPackages">TargetPackages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList">DataOciBdsBdsInstanceGetOsPatchTargetPackagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.osPatchVersionInput">OsPatchVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.osPatchVersion">OsPatchVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.filter"></a>

```csharp
public DataOciBdsBdsInstanceGetOsPatchFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList">DataOciBdsBdsInstanceGetOsPatchFilterList</a>

---

##### `MinBdsVersion`<sup>Required</sup> <a name="MinBdsVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.minBdsVersion"></a>

```csharp
public string MinBdsVersion { get; }
```

- *Type:* string

---

##### `MinCompatibleOdhVersionMap`<sup>Required</sup> <a name="MinCompatibleOdhVersionMap" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.minCompatibleOdhVersionMap"></a>

```csharp
public StringMap MinCompatibleOdhVersionMap { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `PatchType`<sup>Required</sup> <a name="PatchType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.patchType"></a>

```csharp
public string PatchType { get; }
```

- *Type:* string

---

##### `ReleaseDate`<sup>Required</sup> <a name="ReleaseDate" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.releaseDate"></a>

```csharp
public string ReleaseDate { get; }
```

- *Type:* string

---

##### `TargetPackages`<sup>Required</sup> <a name="TargetPackages" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.targetPackages"></a>

```csharp
public DataOciBdsBdsInstanceGetOsPatchTargetPackagesList TargetPackages { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList">DataOciBdsBdsInstanceGetOsPatchTargetPackagesList</a>

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.bdsInstanceIdInput"></a>

```csharp
public string BdsInstanceIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OsPatchVersionInput`<sup>Optional</sup> <a name="OsPatchVersionInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.osPatchVersionInput"></a>

```csharp
public string OsPatchVersionInput { get; }
```

- *Type:* string

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OsPatchVersion`<sup>Required</sup> <a name="OsPatchVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.osPatchVersion"></a>

```csharp
public string OsPatchVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceGetOsPatchConfig <a name="DataOciBdsBdsInstanceGetOsPatchConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceGetOsPatchConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BdsInstanceId,
    string OsPatchVersion,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#bds_instance_id DataOciBdsBdsInstanceGetOsPatch#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.osPatchVersion">OsPatchVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#os_patch_version DataOciBdsBdsInstanceGetOsPatch#os_patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#id DataOciBdsBdsInstanceGetOsPatch#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#bds_instance_id DataOciBdsBdsInstanceGetOsPatch#bds_instance_id}.

---

##### `OsPatchVersion`<sup>Required</sup> <a name="OsPatchVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.osPatchVersion"></a>

```csharp
public string OsPatchVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#os_patch_version DataOciBdsBdsInstanceGetOsPatch#os_patch_version}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#filter DataOciBdsBdsInstanceGetOsPatch#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#id DataOciBdsBdsInstanceGetOsPatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciBdsBdsInstanceGetOsPatchFilter <a name="DataOciBdsBdsInstanceGetOsPatchFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceGetOsPatchFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#name DataOciBdsBdsInstanceGetOsPatch#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#values DataOciBdsBdsInstanceGetOsPatch#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#regex DataOciBdsBdsInstanceGetOsPatch#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#name DataOciBdsBdsInstanceGetOsPatch#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#values DataOciBdsBdsInstanceGetOsPatch#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#regex DataOciBdsBdsInstanceGetOsPatch#regex}.

---

### DataOciBdsBdsInstanceGetOsPatchTargetPackages <a name="DataOciBdsBdsInstanceGetOsPatchTargetPackages" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceGetOsPatchTargetPackages {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsBdsInstanceGetOsPatchFilterList <a name="DataOciBdsBdsInstanceGetOsPatchFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceGetOsPatchFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.get"></a>

```csharp
private DataOciBdsBdsInstanceGetOsPatchFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciBdsBdsInstanceGetOsPatchFilterOutputReference <a name="DataOciBdsBdsInstanceGetOsPatchFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceGetOsPatchFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciBdsBdsInstanceGetOsPatchTargetPackagesList <a name="DataOciBdsBdsInstanceGetOsPatchTargetPackagesList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceGetOsPatchTargetPackagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.get"></a>

```csharp
private DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference <a name="DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.packageName">PackageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.relatedCvEs">RelatedCvEs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.targetVersion">TargetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.updateType">UpdateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages">DataOciBdsBdsInstanceGetOsPatchTargetPackages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.packageName"></a>

```csharp
public string PackageName { get; }
```

- *Type:* string

---

##### `RelatedCvEs`<sup>Required</sup> <a name="RelatedCvEs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.relatedCvEs"></a>

```csharp
public string[] RelatedCvEs { get; }
```

- *Type:* string[]

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.targetVersion"></a>

```csharp
public string TargetVersion { get; }
```

- *Type:* string

---

##### `UpdateType`<sup>Required</sup> <a name="UpdateType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.updateType"></a>

```csharp
public string UpdateType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsBdsInstanceGetOsPatchTargetPackages InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages">DataOciBdsBdsInstanceGetOsPatchTargetPackages</a>

---



