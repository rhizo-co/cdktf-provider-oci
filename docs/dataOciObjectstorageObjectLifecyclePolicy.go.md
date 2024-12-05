# `dataOciObjectstorageObjectLifecyclePolicy` Submodule <a name="`dataOciObjectstorageObjectLifecyclePolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstorageObjectLifecyclePolicy <a name="DataOciObjectstorageObjectLifecyclePolicy" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy oci_objectstorage_object_lifecycle_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobjectlifecyclepolicy"

dataociobjectstorageobjectlifecyclepolicy.NewDataOciObjectstorageObjectLifecyclePolicy(scope Construct, id *string, config DataOciObjectstorageObjectLifecyclePolicyConfig) DataOciObjectstorageObjectLifecyclePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig">DataOciObjectstorageObjectLifecyclePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig">DataOciObjectstorageObjectLifecyclePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciObjectstorageObjectLifecyclePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobjectlifecyclepolicy"

dataociobjectstorageobjectlifecyclepolicy.DataOciObjectstorageObjectLifecyclePolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobjectlifecyclepolicy"

dataociobjectstorageobjectlifecyclepolicy.DataOciObjectstorageObjectLifecyclePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobjectlifecyclepolicy"

dataociobjectstorageobjectlifecyclepolicy.DataOciObjectstorageObjectLifecyclePolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobjectlifecyclepolicy"

dataociobjectstorageobjectlifecyclepolicy.DataOciObjectstorageObjectLifecyclePolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciObjectstorageObjectLifecyclePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciObjectstorageObjectLifecyclePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciObjectstorageObjectLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstorageObjectLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList">DataOciObjectstorageObjectLifecyclePolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.rules"></a>

```go
func Rules() DataOciObjectstorageObjectLifecyclePolicyRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList">DataOciObjectstorageObjectLifecyclePolicyRulesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstorageObjectLifecyclePolicyConfig <a name="DataOciObjectstorageObjectLifecyclePolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobjectlifecyclepolicy"

&dataociobjectstorageobjectlifecyclepolicy.DataOciObjectstorageObjectLifecyclePolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy#bucket DataOciObjectstorageObjectLifecyclePolicy#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy#namespace DataOciObjectstorageObjectLifecyclePolicy#namespace}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy#bucket DataOciObjectstorageObjectLifecyclePolicy#bucket}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy#namespace DataOciObjectstorageObjectLifecyclePolicy#namespace}.

---

### DataOciObjectstorageObjectLifecyclePolicyRules <a name="DataOciObjectstorageObjectLifecyclePolicyRules" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobjectlifecyclepolicy"

&dataociobjectstorageobjectlifecyclepolicy.DataOciObjectstorageObjectLifecyclePolicyRules {

}
```


### DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter <a name="DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobjectlifecyclepolicy"

&dataociobjectstorageobjectlifecyclepolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciObjectstorageObjectLifecyclePolicyRulesList <a name="DataOciObjectstorageObjectLifecyclePolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobjectlifecyclepolicy"

dataociobjectstorageobjectlifecyclepolicy.NewDataOciObjectstorageObjectLifecyclePolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciObjectstorageObjectLifecyclePolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.get"></a>

```go
func Get(index *f64) DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList <a name="DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobjectlifecyclepolicy"

dataociobjectstorageobjectlifecyclepolicy.NewDataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.get"></a>

```go
func Get(index *f64) DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference <a name="DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobjectlifecyclepolicy"

dataociobjectstorageobjectlifecyclepolicy.NewDataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatterns">ExclusionPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatterns">InclusionPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixes">InclusionPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExclusionPatterns`<sup>Required</sup> <a name="ExclusionPatterns" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatterns"></a>

```go
func ExclusionPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `InclusionPatterns`<sup>Required</sup> <a name="InclusionPatterns" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatterns"></a>

```go
func InclusionPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `InclusionPrefixes`<sup>Required</sup> <a name="InclusionPrefixes" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixes"></a>

```go
func InclusionPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

---


### DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference <a name="DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageobjectlifecyclepolicy"

dataociobjectstorageobjectlifecyclepolicy.NewDataOciObjectstorageObjectLifecyclePolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilter">ObjectNameFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList">DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmount">TimeAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnit">TimeUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRules">DataOciObjectstorageObjectLifecyclePolicyRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectNameFilter`<sup>Required</sup> <a name="ObjectNameFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilter"></a>

```go
func ObjectNameFilter() DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList">DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `TimeAmount`<sup>Required</sup> <a name="TimeAmount" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmount"></a>

```go
func TimeAmount() *string
```

- *Type:* *string

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnit"></a>

```go
func TimeUnit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciObjectstorageObjectLifecyclePolicyRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRules">DataOciObjectstorageObjectLifecyclePolicyRules</a>

---



