# `dataOciJmsListJreUsage` Submodule <a name="`dataOciJmsListJreUsage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsListJreUsage <a name="DataOciJmsListJreUsage" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage oci_jms_list_jre_usage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsListJreUsage(Construct Scope, string Id, DataOciJmsListJreUsageConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig">DataOciJmsListJreUsageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig">DataOciJmsListJreUsageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetApplicationName">ResetApplicationName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetHostId">ResetHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetTimeEnd">ResetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetTimeStart">ResetTimeStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetApplicationId` <a name="ResetApplicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetApplicationId"></a>

```csharp
private void ResetApplicationId()
```

##### `ResetApplicationName` <a name="ResetApplicationName" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetApplicationName"></a>

```csharp
private void ResetApplicationName()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetHostId` <a name="ResetHostId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetHostId"></a>

```csharp
private void ResetHostId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeEnd` <a name="ResetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetTimeEnd"></a>

```csharp
private void ResetTimeEnd()
```

##### `ResetTimeStart` <a name="ResetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetTimeStart"></a>

```csharp
private void ResetTimeStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsListJreUsage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsListJreUsage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsListJreUsage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsListJreUsage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsListJreUsage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciJmsListJreUsage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsListJreUsage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsListJreUsage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsListJreUsage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList">DataOciJmsListJreUsageItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.applicationNameInput">ApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.hostIdInput">HostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.timeEndInput">TimeEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.timeStartInput">TimeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.hostId">HostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.items"></a>

```csharp
public DataOciJmsListJreUsageItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList">DataOciJmsListJreUsageItemsList</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `ApplicationNameInput`<sup>Optional</sup> <a name="ApplicationNameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.applicationNameInput"></a>

```csharp
public string ApplicationNameInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `HostIdInput`<sup>Optional</sup> <a name="HostIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.hostIdInput"></a>

```csharp
public string HostIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeEndInput`<sup>Optional</sup> <a name="TimeEndInput" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.timeEndInput"></a>

```csharp
public string TimeEndInput { get; }
```

- *Type:* string

---

##### `TimeStartInput`<sup>Optional</sup> <a name="TimeStartInput" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.timeStartInput"></a>

```csharp
public string TimeStartInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.hostId"></a>

```csharp
public string HostId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsListJreUsageConfig <a name="DataOciJmsListJreUsageConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsListJreUsageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationId = null,
    string ApplicationName = null,
    string CompartmentId = null,
    string HostId = null,
    string Id = null,
    string TimeEnd = null,
    string TimeStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#application_id DataOciJmsListJreUsage#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.applicationName">ApplicationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#application_name DataOciJmsListJreUsage#application_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#compartment_id DataOciJmsListJreUsage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.hostId">HostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#host_id DataOciJmsListJreUsage#host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#id DataOciJmsListJreUsage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.timeEnd">TimeEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#time_end DataOciJmsListJreUsage#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.timeStart">TimeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#time_start DataOciJmsListJreUsage#time_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#application_id DataOciJmsListJreUsage#application_id}.

---

##### `ApplicationName`<sup>Optional</sup> <a name="ApplicationName" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.applicationName"></a>

```csharp
public string ApplicationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#application_name DataOciJmsListJreUsage#application_name}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#compartment_id DataOciJmsListJreUsage#compartment_id}.

---

##### `HostId`<sup>Optional</sup> <a name="HostId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.hostId"></a>

```csharp
public string HostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#host_id DataOciJmsListJreUsage#host_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#id DataOciJmsListJreUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeEnd`<sup>Optional</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.timeEnd"></a>

```csharp
public string TimeEnd { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#time_end DataOciJmsListJreUsage#time_end}.

---

##### `TimeStart`<sup>Optional</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.timeStart"></a>

```csharp
public string TimeStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#time_start DataOciJmsListJreUsage#time_start}.

---

### DataOciJmsListJreUsageItems <a name="DataOciJmsListJreUsageItems" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsListJreUsageItems {

};
```


### DataOciJmsListJreUsageItemsOperatingSystems <a name="DataOciJmsListJreUsageItemsOperatingSystems" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsListJreUsageItemsOperatingSystems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsListJreUsageItemsList <a name="DataOciJmsListJreUsageItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsListJreUsageItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.get"></a>

```csharp
private DataOciJmsListJreUsageItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsListJreUsageItemsOperatingSystemsList <a name="DataOciJmsListJreUsageItemsOperatingSystemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsListJreUsageItemsOperatingSystemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.get"></a>

```csharp
private DataOciJmsListJreUsageItemsOperatingSystemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsListJreUsageItemsOperatingSystemsOutputReference <a name="DataOciJmsListJreUsageItemsOperatingSystemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsListJreUsageItemsOperatingSystemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.family">Family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.managedInstanceCount">ManagedInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystems">DataOciJmsListJreUsageItemsOperatingSystems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `Family`<sup>Required</sup> <a name="Family" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.family"></a>

```csharp
public string Family { get; }
```

- *Type:* string

---

##### `ManagedInstanceCount`<sup>Required</sup> <a name="ManagedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.managedInstanceCount"></a>

```csharp
public double ManagedInstanceCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsListJreUsageItemsOperatingSystems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystems">DataOciJmsListJreUsageItemsOperatingSystems</a>

---


### DataOciJmsListJreUsageItemsOutputReference <a name="DataOciJmsListJreUsageItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsListJreUsageItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.approximateApplicationCount">ApproximateApplicationCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.approximateInstallationCount">ApproximateInstallationCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.approximateManagedInstanceCount">ApproximateManagedInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.approximatePendingWorkRequestCount">ApproximatePendingWorkRequestCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.daysUnderSecurityBaseline">DaysUnderSecurityBaseline</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.distribution">Distribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.endOfSupportLifeDate">EndOfSupportLifeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.fleetId">FleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.operatingSystems">OperatingSystems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList">DataOciJmsListJreUsageItemsOperatingSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.releaseDate">ReleaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.securityStatus">SecurityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.timeFirstSeen">TimeFirstSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.timeLastSeen">TimeLastSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.vendor">Vendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItems">DataOciJmsListJreUsageItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApproximateApplicationCount`<sup>Required</sup> <a name="ApproximateApplicationCount" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.approximateApplicationCount"></a>

```csharp
public double ApproximateApplicationCount { get; }
```

- *Type:* double

---

##### `ApproximateInstallationCount`<sup>Required</sup> <a name="ApproximateInstallationCount" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.approximateInstallationCount"></a>

```csharp
public double ApproximateInstallationCount { get; }
```

- *Type:* double

---

##### `ApproximateManagedInstanceCount`<sup>Required</sup> <a name="ApproximateManagedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.approximateManagedInstanceCount"></a>

```csharp
public double ApproximateManagedInstanceCount { get; }
```

- *Type:* double

---

##### `ApproximatePendingWorkRequestCount`<sup>Required</sup> <a name="ApproximatePendingWorkRequestCount" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.approximatePendingWorkRequestCount"></a>

```csharp
public double ApproximatePendingWorkRequestCount { get; }
```

- *Type:* double

---

##### `DaysUnderSecurityBaseline`<sup>Required</sup> <a name="DaysUnderSecurityBaseline" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.daysUnderSecurityBaseline"></a>

```csharp
public double DaysUnderSecurityBaseline { get; }
```

- *Type:* double

---

##### `Distribution`<sup>Required</sup> <a name="Distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.distribution"></a>

```csharp
public string Distribution { get; }
```

- *Type:* string

---

##### `EndOfSupportLifeDate`<sup>Required</sup> <a name="EndOfSupportLifeDate" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.endOfSupportLifeDate"></a>

```csharp
public string EndOfSupportLifeDate { get; }
```

- *Type:* string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.fleetId"></a>

```csharp
public string FleetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; }
```

- *Type:* string

---

##### `OperatingSystems`<sup>Required</sup> <a name="OperatingSystems" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.operatingSystems"></a>

```csharp
public DataOciJmsListJreUsageItemsOperatingSystemsList OperatingSystems { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList">DataOciJmsListJreUsageItemsOperatingSystemsList</a>

---

##### `ReleaseDate`<sup>Required</sup> <a name="ReleaseDate" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.releaseDate"></a>

```csharp
public string ReleaseDate { get; }
```

- *Type:* string

---

##### `SecurityStatus`<sup>Required</sup> <a name="SecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.securityStatus"></a>

```csharp
public string SecurityStatus { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeFirstSeen`<sup>Required</sup> <a name="TimeFirstSeen" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.timeFirstSeen"></a>

```csharp
public string TimeFirstSeen { get; }
```

- *Type:* string

---

##### `TimeLastSeen`<sup>Required</sup> <a name="TimeLastSeen" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.timeLastSeen"></a>

```csharp
public string TimeLastSeen { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.vendor"></a>

```csharp
public string Vendor { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsListJreUsageItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItems">DataOciJmsListJreUsageItems</a>

---



