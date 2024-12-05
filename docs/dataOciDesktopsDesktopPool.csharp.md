# `dataOciDesktopsDesktopPool` Submodule <a name="`dataOciDesktopsDesktopPool` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDesktopsDesktopPool <a name="DataOciDesktopsDesktopPool" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool oci_desktops_desktop_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPool(Construct Scope, string Id, DataOciDesktopsDesktopPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig">DataOciDesktopsDesktopPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig">DataOciDesktopsDesktopPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDesktopsDesktopPool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDesktopsDesktopPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDesktopsDesktopPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDesktopsDesktopPool.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDesktopsDesktopPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDesktopsDesktopPool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDesktopsDesktopPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDesktopsDesktopPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDesktopsDesktopPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.activeDesktops">ActiveDesktops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.arePrivilegedUsers">ArePrivilegedUsers</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.availabilityPolicy">AvailabilityPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList">DataOciDesktopsDesktopPoolAvailabilityPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.contactDetails">ContactDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.devicePolicy">DevicePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList">DataOciDesktopsDesktopPoolDevicePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.image">Image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList">DataOciDesktopsDesktopPoolImageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.isStorageEnabled">IsStorageEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.maximumSize">MaximumSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList">DataOciDesktopsDesktopPoolNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.privateAccessDetails">PrivateAccessDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList">DataOciDesktopsDesktopPoolPrivateAccessDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.sessionLifecycleActions">SessionLifecycleActions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList">DataOciDesktopsDesktopPoolSessionLifecycleActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList">DataOciDesktopsDesktopPoolShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.standbySize">StandbySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.storageBackupPolicyId">StorageBackupPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.storageSizeInGbs">StorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.timeStartScheduled">TimeStartScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.timeStopScheduled">TimeStopScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.useDedicatedVmHost">UseDedicatedVmHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.desktopPoolIdInput">DesktopPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.desktopPoolId">DesktopPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ActiveDesktops`<sup>Required</sup> <a name="ActiveDesktops" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.activeDesktops"></a>

```csharp
public double ActiveDesktops { get; }
```

- *Type:* double

---

##### `ArePrivilegedUsers`<sup>Required</sup> <a name="ArePrivilegedUsers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.arePrivilegedUsers"></a>

```csharp
public IResolvable ArePrivilegedUsers { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `AvailabilityPolicy`<sup>Required</sup> <a name="AvailabilityPolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.availabilityPolicy"></a>

```csharp
public DataOciDesktopsDesktopPoolAvailabilityPolicyList AvailabilityPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList">DataOciDesktopsDesktopPoolAvailabilityPolicyList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ContactDetails`<sup>Required</sup> <a name="ContactDetails" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.contactDetails"></a>

```csharp
public string ContactDetails { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DevicePolicy`<sup>Required</sup> <a name="DevicePolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.devicePolicy"></a>

```csharp
public DataOciDesktopsDesktopPoolDevicePolicyList DevicePolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList">DataOciDesktopsDesktopPoolDevicePolicyList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.image"></a>

```csharp
public DataOciDesktopsDesktopPoolImageList Image { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList">DataOciDesktopsDesktopPoolImageList</a>

---

##### `IsStorageEnabled`<sup>Required</sup> <a name="IsStorageEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.isStorageEnabled"></a>

```csharp
public IResolvable IsStorageEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaximumSize`<sup>Required</sup> <a name="MaximumSize" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.maximumSize"></a>

```csharp
public double MaximumSize { get; }
```

- *Type:* double

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.networkConfiguration"></a>

```csharp
public DataOciDesktopsDesktopPoolNetworkConfigurationList NetworkConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList">DataOciDesktopsDesktopPoolNetworkConfigurationList</a>

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PrivateAccessDetails`<sup>Required</sup> <a name="PrivateAccessDetails" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.privateAccessDetails"></a>

```csharp
public DataOciDesktopsDesktopPoolPrivateAccessDetailsList PrivateAccessDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList">DataOciDesktopsDesktopPoolPrivateAccessDetailsList</a>

---

##### `SessionLifecycleActions`<sup>Required</sup> <a name="SessionLifecycleActions" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.sessionLifecycleActions"></a>

```csharp
public DataOciDesktopsDesktopPoolSessionLifecycleActionsList SessionLifecycleActions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList">DataOciDesktopsDesktopPoolSessionLifecycleActionsList</a>

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.shapeConfig"></a>

```csharp
public DataOciDesktopsDesktopPoolShapeConfigList ShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList">DataOciDesktopsDesktopPoolShapeConfigList</a>

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `StandbySize`<sup>Required</sup> <a name="StandbySize" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.standbySize"></a>

```csharp
public double StandbySize { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageBackupPolicyId`<sup>Required</sup> <a name="StorageBackupPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.storageBackupPolicyId"></a>

```csharp
public string StorageBackupPolicyId { get; }
```

- *Type:* string

---

##### `StorageSizeInGbs`<sup>Required</sup> <a name="StorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.storageSizeInGbs"></a>

```csharp
public double StorageSizeInGbs { get; }
```

- *Type:* double

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeStartScheduled`<sup>Required</sup> <a name="TimeStartScheduled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.timeStartScheduled"></a>

```csharp
public string TimeStartScheduled { get; }
```

- *Type:* string

---

##### `TimeStopScheduled`<sup>Required</sup> <a name="TimeStopScheduled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.timeStopScheduled"></a>

```csharp
public string TimeStopScheduled { get; }
```

- *Type:* string

---

##### `UseDedicatedVmHost`<sup>Required</sup> <a name="UseDedicatedVmHost" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.useDedicatedVmHost"></a>

```csharp
public string UseDedicatedVmHost { get; }
```

- *Type:* string

---

##### `DesktopPoolIdInput`<sup>Optional</sup> <a name="DesktopPoolIdInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.desktopPoolIdInput"></a>

```csharp
public string DesktopPoolIdInput { get; }
```

- *Type:* string

---

##### `DesktopPoolId`<sup>Required</sup> <a name="DesktopPoolId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.desktopPoolId"></a>

```csharp
public string DesktopPoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDesktopsDesktopPoolAvailabilityPolicy <a name="DataOciDesktopsDesktopPoolAvailabilityPolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolAvailabilityPolicy {

};
```


### DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule <a name="DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule {

};
```


### DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule <a name="DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule {

};
```


### DataOciDesktopsDesktopPoolConfig <a name="DataOciDesktopsDesktopPoolConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DesktopPoolId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.desktopPoolId">DesktopPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool#desktop_pool_id DataOciDesktopsDesktopPool#desktop_pool_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DesktopPoolId`<sup>Required</sup> <a name="DesktopPoolId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.desktopPoolId"></a>

```csharp
public string DesktopPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool#desktop_pool_id DataOciDesktopsDesktopPool#desktop_pool_id}.

---

### DataOciDesktopsDesktopPoolDevicePolicy <a name="DataOciDesktopsDesktopPoolDevicePolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolDevicePolicy {

};
```


### DataOciDesktopsDesktopPoolImage <a name="DataOciDesktopsDesktopPoolImage" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolImage {

};
```


### DataOciDesktopsDesktopPoolNetworkConfiguration <a name="DataOciDesktopsDesktopPoolNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolNetworkConfiguration {

};
```


### DataOciDesktopsDesktopPoolPrivateAccessDetails <a name="DataOciDesktopsDesktopPoolPrivateAccessDetails" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolPrivateAccessDetails {

};
```


### DataOciDesktopsDesktopPoolSessionLifecycleActions <a name="DataOciDesktopsDesktopPoolSessionLifecycleActions" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolSessionLifecycleActions {

};
```


### DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect <a name="DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect {

};
```


### DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity <a name="DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity {

};
```


### DataOciDesktopsDesktopPoolShapeConfig <a name="DataOciDesktopsDesktopPoolShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolShapeConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDesktopsDesktopPoolAvailabilityPolicyList <a name="DataOciDesktopsDesktopPoolAvailabilityPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolAvailabilityPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference <a name="DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startSchedule">StartSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList">DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopSchedule">StopSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList">DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicy">DataOciDesktopsDesktopPoolAvailabilityPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartSchedule`<sup>Required</sup> <a name="StartSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startSchedule"></a>

```csharp
public DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList StartSchedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList">DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList</a>

---

##### `StopSchedule`<sup>Required</sup> <a name="StopSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopSchedule"></a>

```csharp
public DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList StopSchedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList">DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolAvailabilityPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicy">DataOciDesktopsDesktopPoolAvailabilityPolicy</a>

---


### DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList <a name="DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference <a name="DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule">DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule">DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

---


### DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList <a name="DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference <a name="DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule">DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule">DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

---


### DataOciDesktopsDesktopPoolDevicePolicyList <a name="DataOciDesktopsDesktopPoolDevicePolicyList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolDevicePolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolDevicePolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolDevicePolicyOutputReference <a name="DataOciDesktopsDesktopPoolDevicePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolDevicePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.audioMode">AudioMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.cdmMode">CdmMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardMode">ClipboardMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabled">IsDisplayEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabled">IsKeyboardEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabled">IsPointerEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabled">IsPrintingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicy">DataOciDesktopsDesktopPoolDevicePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioMode`<sup>Required</sup> <a name="AudioMode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.audioMode"></a>

```csharp
public string AudioMode { get; }
```

- *Type:* string

---

##### `CdmMode`<sup>Required</sup> <a name="CdmMode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.cdmMode"></a>

```csharp
public string CdmMode { get; }
```

- *Type:* string

---

##### `ClipboardMode`<sup>Required</sup> <a name="ClipboardMode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardMode"></a>

```csharp
public string ClipboardMode { get; }
```

- *Type:* string

---

##### `IsDisplayEnabled`<sup>Required</sup> <a name="IsDisplayEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabled"></a>

```csharp
public IResolvable IsDisplayEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsKeyboardEnabled`<sup>Required</sup> <a name="IsKeyboardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabled"></a>

```csharp
public IResolvable IsKeyboardEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPointerEnabled`<sup>Required</sup> <a name="IsPointerEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabled"></a>

```csharp
public IResolvable IsPointerEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPrintingEnabled`<sup>Required</sup> <a name="IsPrintingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabled"></a>

```csharp
public IResolvable IsPrintingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolDevicePolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicy">DataOciDesktopsDesktopPoolDevicePolicy</a>

---


### DataOciDesktopsDesktopPoolImageList <a name="DataOciDesktopsDesktopPoolImageList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolImageOutputReference <a name="DataOciDesktopsDesktopPoolImageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImage">DataOciDesktopsDesktopPoolImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolImage InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImage">DataOciDesktopsDesktopPoolImage</a>

---


### DataOciDesktopsDesktopPoolNetworkConfigurationList <a name="DataOciDesktopsDesktopPoolNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolNetworkConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference <a name="DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnId">VcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfiguration">DataOciDesktopsDesktopPoolNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnId"></a>

```csharp
public string VcnId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfiguration">DataOciDesktopsDesktopPoolNetworkConfiguration</a>

---


### DataOciDesktopsDesktopPoolPrivateAccessDetailsList <a name="DataOciDesktopsDesktopPoolPrivateAccessDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolPrivateAccessDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference <a name="DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.endpointFqdn">EndpointFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.vcnId">VcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetails">DataOciDesktopsDesktopPoolPrivateAccessDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointFqdn`<sup>Required</sup> <a name="EndpointFqdn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.endpointFqdn"></a>

```csharp
public string EndpointFqdn { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.vcnId"></a>

```csharp
public string VcnId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolPrivateAccessDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetails">DataOciDesktopsDesktopPoolPrivateAccessDetails</a>

---


### DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList <a name="DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference <a name="DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes">GracePeriodInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect">DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `GracePeriodInMinutes`<sup>Required</sup> <a name="GracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes"></a>

```csharp
public double GracePeriodInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect">DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

---


### DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList <a name="DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference <a name="DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes">GracePeriodInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity">DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `GracePeriodInMinutes`<sup>Required</sup> <a name="GracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes"></a>

```csharp
public double GracePeriodInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity">DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

---


### DataOciDesktopsDesktopPoolSessionLifecycleActionsList <a name="DataOciDesktopsDesktopPoolSessionLifecycleActionsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolSessionLifecycleActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference <a name="DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnect">Disconnect</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList">DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivity">Inactivity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList">DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActions">DataOciDesktopsDesktopPoolSessionLifecycleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Disconnect`<sup>Required</sup> <a name="Disconnect" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnect"></a>

```csharp
public DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList Disconnect { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList">DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList</a>

---

##### `Inactivity`<sup>Required</sup> <a name="Inactivity" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivity"></a>

```csharp
public DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList Inactivity { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList">DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolSessionLifecycleActions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActions">DataOciDesktopsDesktopPoolSessionLifecycleActions</a>

---


### DataOciDesktopsDesktopPoolShapeConfigList <a name="DataOciDesktopsDesktopPoolShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolShapeConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolShapeConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolShapeConfigOutputReference <a name="DataOciDesktopsDesktopPoolShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilization">BaselineOcpuUtilization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfig">DataOciDesktopsDesktopPoolShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaselineOcpuUtilization`<sup>Required</sup> <a name="BaselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilization"></a>

```csharp
public string BaselineOcpuUtilization { get; }
```

- *Type:* string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public string MemoryInGbs { get; }
```

- *Type:* string

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.ocpus"></a>

```csharp
public string Ocpus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfig">DataOciDesktopsDesktopPoolShapeConfig</a>

---



