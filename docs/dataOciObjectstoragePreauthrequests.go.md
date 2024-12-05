# `dataOciObjectstoragePreauthrequests` Submodule <a name="`dataOciObjectstoragePreauthrequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstoragePreauthrequests <a name="DataOciObjectstoragePreauthrequests" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests oci_objectstorage_preauthrequests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequests"

dataociobjectstoragepreauthrequests.NewDataOciObjectstoragePreauthrequests(scope Construct, id *string, config DataOciObjectstoragePreauthrequestsConfig) DataOciObjectstoragePreauthrequests
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig">DataOciObjectstoragePreauthrequestsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig">DataOciObjectstoragePreauthrequestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetObjectNamePrefix">ResetObjectNamePrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetId"></a>

```go
func ResetId()
```

##### `ResetObjectNamePrefix` <a name="ResetObjectNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetObjectNamePrefix"></a>

```go
func ResetObjectNamePrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciObjectstoragePreauthrequests resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequests"

dataociobjectstoragepreauthrequests.DataOciObjectstoragePreauthrequests_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequests"

dataociobjectstoragepreauthrequests.DataOciObjectstoragePreauthrequests_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequests"

dataociobjectstoragepreauthrequests.DataOciObjectstoragePreauthrequests_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequests"

dataociobjectstoragepreauthrequests.DataOciObjectstoragePreauthrequests_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciObjectstoragePreauthrequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciObjectstoragePreauthrequests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciObjectstoragePreauthrequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstoragePreauthrequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList">DataOciObjectstoragePreauthrequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.preauthenticatedRequests">PreauthenticatedRequests</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList">DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.objectNamePrefixInput">ObjectNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.objectNamePrefix">ObjectNamePrefix</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.filter"></a>

```go
func Filter() DataOciObjectstoragePreauthrequestsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList">DataOciObjectstoragePreauthrequestsFilterList</a>

---

##### `PreauthenticatedRequests`<sup>Required</sup> <a name="PreauthenticatedRequests" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.preauthenticatedRequests"></a>

```go
func PreauthenticatedRequests() DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList">DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ObjectNamePrefixInput`<sup>Optional</sup> <a name="ObjectNamePrefixInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.objectNamePrefixInput"></a>

```go
func ObjectNamePrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ObjectNamePrefix`<sup>Required</sup> <a name="ObjectNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.objectNamePrefix"></a>

```go
func ObjectNamePrefix() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstoragePreauthrequestsConfig <a name="DataOciObjectstoragePreauthrequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequests"

&dataociobjectstoragepreauthrequests.DataOciObjectstoragePreauthrequestsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Namespace: *string,
	Filter: interface{},
	Id: *string,
	ObjectNamePrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#bucket DataOciObjectstoragePreauthrequests#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#namespace DataOciObjectstoragePreauthrequests#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#id DataOciObjectstoragePreauthrequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.objectNamePrefix">ObjectNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#object_name_prefix DataOciObjectstoragePreauthrequests#object_name_prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#bucket DataOciObjectstoragePreauthrequests#bucket}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#namespace DataOciObjectstoragePreauthrequests#namespace}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#filter DataOciObjectstoragePreauthrequests#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#id DataOciObjectstoragePreauthrequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ObjectNamePrefix`<sup>Optional</sup> <a name="ObjectNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.objectNamePrefix"></a>

```go
ObjectNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#object_name_prefix DataOciObjectstoragePreauthrequests#object_name_prefix}.

---

### DataOciObjectstoragePreauthrequestsFilter <a name="DataOciObjectstoragePreauthrequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequests"

&dataociobjectstoragepreauthrequests.DataOciObjectstoragePreauthrequestsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#name DataOciObjectstoragePreauthrequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#values DataOciObjectstoragePreauthrequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#regex DataOciObjectstoragePreauthrequests#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#name DataOciObjectstoragePreauthrequests#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#values DataOciObjectstoragePreauthrequests#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#regex DataOciObjectstoragePreauthrequests#regex}.

---

### DataOciObjectstoragePreauthrequestsPreauthenticatedRequests <a name="DataOciObjectstoragePreauthrequestsPreauthenticatedRequests" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequests"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequests.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequests"

&dataociobjectstoragepreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequests {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciObjectstoragePreauthrequestsFilterList <a name="DataOciObjectstoragePreauthrequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequests"

dataociobjectstoragepreauthrequests.NewDataOciObjectstoragePreauthrequestsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciObjectstoragePreauthrequestsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.get"></a>

```go
func Get(index *f64) DataOciObjectstoragePreauthrequestsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciObjectstoragePreauthrequestsFilterOutputReference <a name="DataOciObjectstoragePreauthrequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequests"

dataociobjectstoragepreauthrequests.NewDataOciObjectstoragePreauthrequestsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciObjectstoragePreauthrequestsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList <a name="DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequests"

dataociobjectstoragepreauthrequests.NewDataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.get"></a>

```go
func Get(index *f64) DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference <a name="DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstoragepreauthrequests"

dataociobjectstoragepreauthrequests.NewDataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.accessUri">AccessUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.bucketListingAction">BucketListingAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.fullPath">FullPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.objectName">ObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.parId">ParId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.timeExpires">TimeExpires</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequests">DataOciObjectstoragePreauthrequestsPreauthenticatedRequests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `AccessUri`<sup>Required</sup> <a name="AccessUri" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.accessUri"></a>

```go
func AccessUri() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketListingAction`<sup>Required</sup> <a name="BucketListingAction" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.bucketListingAction"></a>

```go
func BucketListingAction() *string
```

- *Type:* *string

---

##### `FullPath`<sup>Required</sup> <a name="FullPath" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.fullPath"></a>

```go
func FullPath() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.objectName"></a>

```go
func ObjectName() *string
```

- *Type:* *string

---

##### `ParId`<sup>Required</sup> <a name="ParId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.parId"></a>

```go
func ParId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeExpires`<sup>Required</sup> <a name="TimeExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.timeExpires"></a>

```go
func TimeExpires() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciObjectstoragePreauthrequestsPreauthenticatedRequests
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequests">DataOciObjectstoragePreauthrequestsPreauthenticatedRequests</a>

---



