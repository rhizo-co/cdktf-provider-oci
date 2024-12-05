# `dataOciSecurityAttributeSecurityAttributeNamespace` Submodule <a name="`dataOciSecurityAttributeSecurityAttributeNamespace` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSecurityAttributeSecurityAttributeNamespace <a name="DataOciSecurityAttributeSecurityAttributeNamespace" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespace oci_security_attribute_security_attribute_namespace}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespace"

dataocisecurityattributesecurityattributenamespace.NewDataOciSecurityAttributeSecurityAttributeNamespace(scope Construct, id *string, config DataOciSecurityAttributeSecurityAttributeNamespaceConfig) DataOciSecurityAttributeSecurityAttributeNamespace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig">DataOciSecurityAttributeSecurityAttributeNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig">DataOciSecurityAttributeSecurityAttributeNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttributeNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespace"

dataocisecurityattributesecurityattributenamespace.DataOciSecurityAttributeSecurityAttributeNamespace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespace"

dataocisecurityattributesecurityattributenamespace.DataOciSecurityAttributeSecurityAttributeNamespace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespace"

dataocisecurityattributesecurityattributenamespace.DataOciSecurityAttributeSecurityAttributeNamespace_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespace"

dataocisecurityattributesecurityattributenamespace.DataOciSecurityAttributeSecurityAttributeNamespace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttributeNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciSecurityAttributeSecurityAttributeNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciSecurityAttributeSecurityAttributeNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSecurityAttributeSecurityAttributeNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.isRetired">IsRetired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.mode">Mode</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.securityAttributeNamespaceIdInput">SecurityAttributeNamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.securityAttributeNamespaceId">SecurityAttributeNamespaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsRetired`<sup>Required</sup> <a name="IsRetired" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.isRetired"></a>

```go
func IsRetired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.mode"></a>

```go
func Mode() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `SecurityAttributeNamespaceIdInput`<sup>Optional</sup> <a name="SecurityAttributeNamespaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.securityAttributeNamespaceIdInput"></a>

```go
func SecurityAttributeNamespaceIdInput() *string
```

- *Type:* *string

---

##### `SecurityAttributeNamespaceId`<sup>Required</sup> <a name="SecurityAttributeNamespaceId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.securityAttributeNamespaceId"></a>

```go
func SecurityAttributeNamespaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSecurityAttributeSecurityAttributeNamespaceConfig <a name="DataOciSecurityAttributeSecurityAttributeNamespaceConfig" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocisecurityattributesecurityattributenamespace"

&dataocisecurityattributesecurityattributenamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SecurityAttributeNamespaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.property.securityAttributeNamespaceId">SecurityAttributeNamespaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespace#security_attribute_namespace_id DataOciSecurityAttributeSecurityAttributeNamespace#security_attribute_namespace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecurityAttributeNamespaceId`<sup>Required</sup> <a name="SecurityAttributeNamespaceId" id="rhizo-co-terraform-provider-oci.dataOciSecurityAttributeSecurityAttributeNamespace.DataOciSecurityAttributeSecurityAttributeNamespaceConfig.property.securityAttributeNamespaceId"></a>

```go
SecurityAttributeNamespaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/security_attribute_security_attribute_namespace#security_attribute_namespace_id DataOciSecurityAttributeSecurityAttributeNamespace#security_attribute_namespace_id}.

---



