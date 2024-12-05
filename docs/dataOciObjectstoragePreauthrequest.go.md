# `dataOciObjectstoragePreauthrequest` Submodule <a name="`dataOciObjectstoragePreauthrequest` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstoragePreauthrequest <a name="DataOciObjectstoragePreauthrequest" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequest oci_objectstorage_preauthrequest}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequest"

dataociobjectstoragepreauthrequest.NewDataOciObjectstoragePreauthrequest(scope Construct, id *string, config DataOciObjectstoragePreauthrequestConfig) DataOciObjectstoragePreauthrequest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig">DataOciObjectstoragePreauthrequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig">DataOciObjectstoragePreauthrequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciObjectstoragePreauthrequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequest"

dataociobjectstoragepreauthrequest.DataOciObjectstoragePreauthrequest_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequest"

dataociobjectstoragepreauthrequest.DataOciObjectstoragePreauthrequest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequest"

dataociobjectstoragepreauthrequest.DataOciObjectstoragePreauthrequest_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequest"

dataociobjectstoragepreauthrequest.DataOciObjectstoragePreauthrequest_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciObjectstoragePreauthrequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciObjectstoragePreauthrequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciObjectstoragePreauthrequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequest#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstoragePreauthrequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.accessUri">AccessUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.bucketListingAction">BucketListingAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.fullPath">FullPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.objectName">ObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.timeExpires">TimeExpires</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.parIdInput">ParIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.parId">ParId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `AccessUri`<sup>Required</sup> <a name="AccessUri" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.accessUri"></a>

```go
func AccessUri() *string
```

- *Type:* *string

---

##### `BucketListingAction`<sup>Required</sup> <a name="BucketListingAction" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.bucketListingAction"></a>

```go
func BucketListingAction() *string
```

- *Type:* *string

---

##### `FullPath`<sup>Required</sup> <a name="FullPath" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.fullPath"></a>

```go
func FullPath() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.objectName"></a>

```go
func ObjectName() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeExpires`<sup>Required</sup> <a name="TimeExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.timeExpires"></a>

```go
func TimeExpires() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ParIdInput`<sup>Optional</sup> <a name="ParIdInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.parIdInput"></a>

```go
func ParIdInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ParId`<sup>Required</sup> <a name="ParId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.parId"></a>

```go
func ParId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstoragePreauthrequestConfig <a name="DataOciObjectstoragePreauthrequestConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequest"

&dataociobjectstoragepreauthrequest.DataOciObjectstoragePreauthrequestConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Namespace: *string,
	ParId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequest#bucket DataOciObjectstoragePreauthrequest#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequest#namespace DataOciObjectstoragePreauthrequest#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.parId">ParId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequest#par_id DataOciObjectstoragePreauthrequest#par_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequest#bucket DataOciObjectstoragePreauthrequest#bucket}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequest#namespace DataOciObjectstoragePreauthrequest#namespace}.

---

##### `ParId`<sup>Required</sup> <a name="ParId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequest.DataOciObjectstoragePreauthrequestConfig.property.parId"></a>

```go
ParId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequest#par_id DataOciObjectstoragePreauthrequest#par_id}.

---



