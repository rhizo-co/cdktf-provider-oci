# `dataOciObjectstoragePrivateEndpointSummaries` Submodule <a name="`dataOciObjectstoragePrivateEndpointSummaries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstoragePrivateEndpointSummaries <a name="DataOciObjectstoragePrivateEndpointSummaries" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries oci_objectstorage_private_endpoint_summaries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageprivateendpointsummaries"

dataociobjectstorageprivateendpointsummaries.NewDataOciObjectstoragePrivateEndpointSummaries(scope Construct, id *string, config DataOciObjectstoragePrivateEndpointSummariesConfig) DataOciObjectstoragePrivateEndpointSummaries
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig">DataOciObjectstoragePrivateEndpointSummariesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig">DataOciObjectstoragePrivateEndpointSummariesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciObjectstoragePrivateEndpointSummaries resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageprivateendpointsummaries"

dataociobjectstorageprivateendpointsummaries.DataOciObjectstoragePrivateEndpointSummaries_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageprivateendpointsummaries"

dataociobjectstorageprivateendpointsummaries.DataOciObjectstoragePrivateEndpointSummaries_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageprivateendpointsummaries"

dataociobjectstorageprivateendpointsummaries.DataOciObjectstoragePrivateEndpointSummaries_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageprivateendpointsummaries"

dataociobjectstorageprivateendpointsummaries.DataOciObjectstoragePrivateEndpointSummaries_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciObjectstoragePrivateEndpointSummaries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciObjectstoragePrivateEndpointSummaries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciObjectstoragePrivateEndpointSummaries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstoragePrivateEndpointSummaries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList">DataOciObjectstoragePrivateEndpointSummariesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.privateEndpointSummaries">PrivateEndpointSummaries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.filter"></a>

```go
func Filter() DataOciObjectstoragePrivateEndpointSummariesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList">DataOciObjectstoragePrivateEndpointSummariesFilterList</a>

---

##### `PrivateEndpointSummaries`<sup>Required</sup> <a name="PrivateEndpointSummaries" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.privateEndpointSummaries"></a>

```go
func PrivateEndpointSummaries() DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstoragePrivateEndpointSummariesConfig <a name="DataOciObjectstoragePrivateEndpointSummariesConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageprivateendpointsummaries"

&dataociobjectstorageprivateendpointsummaries.DataOciObjectstoragePrivateEndpointSummariesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Namespace: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#compartment_id DataOciObjectstoragePrivateEndpointSummaries#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#namespace DataOciObjectstoragePrivateEndpointSummaries#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#id DataOciObjectstoragePrivateEndpointSummaries#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#compartment_id DataOciObjectstoragePrivateEndpointSummaries#compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#namespace DataOciObjectstoragePrivateEndpointSummaries#namespace}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#filter DataOciObjectstoragePrivateEndpointSummaries#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#id DataOciObjectstoragePrivateEndpointSummaries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciObjectstoragePrivateEndpointSummariesFilter <a name="DataOciObjectstoragePrivateEndpointSummariesFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageprivateendpointsummaries"

&dataociobjectstorageprivateendpointsummaries.DataOciObjectstoragePrivateEndpointSummariesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#name DataOciObjectstoragePrivateEndpointSummaries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#values DataOciObjectstoragePrivateEndpointSummaries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#regex DataOciObjectstoragePrivateEndpointSummaries#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#name DataOciObjectstoragePrivateEndpointSummaries#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#values DataOciObjectstoragePrivateEndpointSummaries#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#regex DataOciObjectstoragePrivateEndpointSummaries#regex}.

---

### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageprivateendpointsummaries"

&dataociobjectstorageprivateendpointsummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries {

}
```


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageprivateendpointsummaries"

&dataociobjectstorageprivateendpointsummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciObjectstoragePrivateEndpointSummariesFilterList <a name="DataOciObjectstoragePrivateEndpointSummariesFilterList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageprivateendpointsummaries"

dataociobjectstorageprivateendpointsummaries.NewDataOciObjectstoragePrivateEndpointSummariesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciObjectstoragePrivateEndpointSummariesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.get"></a>

```go
func Get(index *f64) DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference <a name="DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageprivateendpointsummaries"

dataociobjectstorageprivateendpointsummaries.NewDataOciObjectstoragePrivateEndpointSummariesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageprivateendpointsummaries"

dataociobjectstorageprivateendpointsummaries.NewDataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.get"></a>

```go
func Get(index *f64) DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageprivateendpointsummaries"

dataociobjectstorageprivateendpointsummaries.NewDataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets</a>

---


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageprivateendpointsummaries"

dataociobjectstorageprivateendpointsummaries.NewDataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.get"></a>

```go
func Get(index *f64) DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociobjectstorageprivateendpointsummaries"

dataociobjectstorageprivateendpointsummaries.NewDataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.accessTargets">AccessTargets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.additionalPrefixes">AdditionalPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.fqdns">Fqdns</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.AnyMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.timeModified">TimeModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTargets`<sup>Required</sup> <a name="AccessTargets" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.accessTargets"></a>

```go
func AccessTargets() DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList</a>

---

##### `AdditionalPrefixes`<sup>Required</sup> <a name="AdditionalPrefixes" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.additionalPrefixes"></a>

```go
func AdditionalPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Fqdns`<sup>Required</sup> <a name="Fqdns" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.fqdns"></a>

```go
func Fqdns() AnyMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.AnyMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.privateEndpointIp"></a>

```go
func PrivateEndpointIp() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.timeModified"></a>

```go
func TimeModified() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries</a>

---



