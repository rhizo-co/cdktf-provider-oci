# `dataOciSecurityAttributeSecurityAttribute` Submodule <a name="`dataOciSecurityAttributeSecurityAttribute` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSecurityAttributeSecurityAttribute <a name="DataOciSecurityAttributeSecurityAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute oci_security_attribute_security_attribute}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSecurityAttributeSecurityAttribute(Construct Scope, string Id, DataOciSecurityAttributeSecurityAttributeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig">DataOciSecurityAttributeSecurityAttributeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig">DataOciSecurityAttributeSecurityAttributeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttribute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciSecurityAttributeSecurityAttribute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciSecurityAttributeSecurityAttribute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciSecurityAttributeSecurityAttribute.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciSecurityAttributeSecurityAttribute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttribute resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciSecurityAttributeSecurityAttribute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciSecurityAttributeSecurityAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSecurityAttributeSecurityAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.isRetired">IsRetired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeNamespaceName">SecurityAttributeNamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.validator">Validator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList">DataOciSecurityAttributeSecurityAttributeValidatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeNameInput">SecurityAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeNamespaceIdInput">SecurityAttributeNamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeName">SecurityAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeNamespaceId">SecurityAttributeNamespaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsRetired`<sup>Required</sup> <a name="IsRetired" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.isRetired"></a>

```csharp
public IResolvable IsRetired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecurityAttributeNamespaceName`<sup>Required</sup> <a name="SecurityAttributeNamespaceName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeNamespaceName"></a>

```csharp
public string SecurityAttributeNamespaceName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Validator`<sup>Required</sup> <a name="Validator" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.validator"></a>

```csharp
public DataOciSecurityAttributeSecurityAttributeValidatorList Validator { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList">DataOciSecurityAttributeSecurityAttributeValidatorList</a>

---

##### `SecurityAttributeNameInput`<sup>Optional</sup> <a name="SecurityAttributeNameInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeNameInput"></a>

```csharp
public string SecurityAttributeNameInput { get; }
```

- *Type:* string

---

##### `SecurityAttributeNamespaceIdInput`<sup>Optional</sup> <a name="SecurityAttributeNamespaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeNamespaceIdInput"></a>

```csharp
public string SecurityAttributeNamespaceIdInput { get; }
```

- *Type:* string

---

##### `SecurityAttributeName`<sup>Required</sup> <a name="SecurityAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeName"></a>

```csharp
public string SecurityAttributeName { get; }
```

- *Type:* string

---

##### `SecurityAttributeNamespaceId`<sup>Required</sup> <a name="SecurityAttributeNamespaceId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.securityAttributeNamespaceId"></a>

```csharp
public string SecurityAttributeNamespaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttribute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSecurityAttributeSecurityAttributeConfig <a name="DataOciSecurityAttributeSecurityAttributeConfig" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSecurityAttributeSecurityAttributeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SecurityAttributeName,
    string SecurityAttributeNamespaceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.securityAttributeName">SecurityAttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute#security_attribute_name DataOciSecurityAttributeSecurityAttribute#security_attribute_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.securityAttributeNamespaceId">SecurityAttributeNamespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute#security_attribute_namespace_id DataOciSecurityAttributeSecurityAttribute#security_attribute_namespace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SecurityAttributeName`<sup>Required</sup> <a name="SecurityAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.securityAttributeName"></a>

```csharp
public string SecurityAttributeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute#security_attribute_name DataOciSecurityAttributeSecurityAttribute#security_attribute_name}.

---

##### `SecurityAttributeNamespaceId`<sup>Required</sup> <a name="SecurityAttributeNamespaceId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeConfig.property.securityAttributeNamespaceId"></a>

```csharp
public string SecurityAttributeNamespaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute#security_attribute_namespace_id DataOciSecurityAttributeSecurityAttribute#security_attribute_namespace_id}.

---

### DataOciSecurityAttributeSecurityAttributeValidator <a name="DataOciSecurityAttributeSecurityAttributeValidator" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSecurityAttributeSecurityAttributeValidator {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSecurityAttributeSecurityAttributeValidatorList <a name="DataOciSecurityAttributeSecurityAttributeValidatorList" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSecurityAttributeSecurityAttributeValidatorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.get"></a>

```csharp
private DataOciSecurityAttributeSecurityAttributeValidatorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciSecurityAttributeSecurityAttributeValidatorOutputReference <a name="DataOciSecurityAttributeSecurityAttributeValidatorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSecurityAttributeSecurityAttributeValidatorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.validatorType">ValidatorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidator">DataOciSecurityAttributeSecurityAttributeValidator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValidatorType`<sup>Required</sup> <a name="ValidatorType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.validatorType"></a>

```csharp
public string ValidatorType { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidatorOutputReference.property.internalValue"></a>

```csharp
public DataOciSecurityAttributeSecurityAttributeValidator InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttribute.DataOciSecurityAttributeSecurityAttributeValidator">DataOciSecurityAttributeSecurityAttributeValidator</a>

---



