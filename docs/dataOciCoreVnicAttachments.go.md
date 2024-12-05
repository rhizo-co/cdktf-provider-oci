# `dataOciCoreVnicAttachments` Submodule <a name="`dataOciCoreVnicAttachments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVnicAttachments <a name="DataOciCoreVnicAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments oci_core_vnic_attachments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

dataocicorevnicattachments.NewDataOciCoreVnicAttachments(scope Construct, id *string, config DataOciCoreVnicAttachmentsConfig) DataOciCoreVnicAttachments
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig">DataOciCoreVnicAttachmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig">DataOciCoreVnicAttachmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetVnicId">ResetVnicId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetVnicId` <a name="ResetVnicId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.resetVnicId"></a>

```go
func ResetVnicId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVnicAttachments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

dataocicorevnicattachments.DataOciCoreVnicAttachments_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

dataocicorevnicattachments.DataOciCoreVnicAttachments_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

dataocicorevnicattachments.DataOciCoreVnicAttachments_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

dataocicorevnicattachments.DataOciCoreVnicAttachments_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreVnicAttachments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreVnicAttachments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreVnicAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVnicAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList">DataOciCoreVnicAttachmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.vnicAttachments">VnicAttachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList">DataOciCoreVnicAttachmentsVnicAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.vnicIdInput">VnicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.vnicId">VnicId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.filter"></a>

```go
func Filter() DataOciCoreVnicAttachmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList">DataOciCoreVnicAttachmentsFilterList</a>

---

##### `VnicAttachments`<sup>Required</sup> <a name="VnicAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.vnicAttachments"></a>

```go
func VnicAttachments() DataOciCoreVnicAttachmentsVnicAttachmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList">DataOciCoreVnicAttachmentsVnicAttachmentsList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `VnicIdInput`<sup>Optional</sup> <a name="VnicIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.vnicIdInput"></a>

```go
func VnicIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.vnicId"></a>

```go
func VnicId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachments.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVnicAttachmentsConfig <a name="DataOciCoreVnicAttachmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

&dataocicorevnicattachments.DataOciCoreVnicAttachmentsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AvailabilityDomain: *string,
	Filter: interface{},
	Id: *string,
	InstanceId: *string,
	VnicId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#compartment_id DataOciCoreVnicAttachments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#availability_domain DataOciCoreVnicAttachments#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#id DataOciCoreVnicAttachments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#instance_id DataOciCoreVnicAttachments#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.vnicId">VnicId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#vnic_id DataOciCoreVnicAttachments#vnic_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#compartment_id DataOciCoreVnicAttachments#compartment_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#availability_domain DataOciCoreVnicAttachments#availability_domain}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#filter DataOciCoreVnicAttachments#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#id DataOciCoreVnicAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#instance_id DataOciCoreVnicAttachments#instance_id}.

---

##### `VnicId`<sup>Optional</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsConfig.property.vnicId"></a>

```go
VnicId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#vnic_id DataOciCoreVnicAttachments#vnic_id}.

---

### DataOciCoreVnicAttachmentsFilter <a name="DataOciCoreVnicAttachmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

&dataocicorevnicattachments.DataOciCoreVnicAttachmentsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#name DataOciCoreVnicAttachments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#values DataOciCoreVnicAttachments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#regex DataOciCoreVnicAttachments#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#name DataOciCoreVnicAttachments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#values DataOciCoreVnicAttachments#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_vnic_attachments#regex DataOciCoreVnicAttachments#regex}.

---

### DataOciCoreVnicAttachmentsVnicAttachments <a name="DataOciCoreVnicAttachmentsVnicAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

&dataocicorevnicattachments.DataOciCoreVnicAttachmentsVnicAttachments {

}
```


### DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails <a name="DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

&dataocicorevnicattachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails {

}
```


### DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails <a name="DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

&dataocicorevnicattachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVnicAttachmentsFilterList <a name="DataOciCoreVnicAttachmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

dataocicorevnicattachments.NewDataOciCoreVnicAttachmentsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreVnicAttachmentsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreVnicAttachmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreVnicAttachmentsFilterOutputReference <a name="DataOciCoreVnicAttachmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

dataocicorevnicattachments.NewDataOciCoreVnicAttachmentsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreVnicAttachmentsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

dataocicorevnicattachments.NewDataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```go
func Get(index *f64) DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

dataocicorevnicattachments.NewDataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">Ipv6SubnetCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `Ipv6SubnetCidr`<sup>Required</sup> <a name="Ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```go
func Ipv6SubnetCidr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList <a name="DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

dataocicorevnicattachments.NewDataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.get"></a>

```go
func Get(index *f64) DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference <a name="DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

dataocicorevnicattachments.NewDataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.assignIpv6Ip">AssignIpv6Ip</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord">AssignPrivateDnsRecord</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.hostnameLabel">HostnameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">Ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.securityAttributes">SecurityAttributes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.skipSourceDestCheck">SkipSourceDestCheck</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails">DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssignIpv6Ip`<sup>Required</sup> <a name="AssignIpv6Ip" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.assignIpv6Ip"></a>

```go
func AssignIpv6Ip() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AssignPrivateDnsRecord`<sup>Required</sup> <a name="AssignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord"></a>

```go
func AssignPrivateDnsRecord() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.assignPublicIp"></a>

```go
func AssignPublicIp() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.hostnameLabel"></a>

```go
func HostnameLabel() *string
```

- *Type:* *string

---

##### `Ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="Ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```go
func Ipv6AddressIpv6SubnetCidrPairDetails() DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.securityAttributes"></a>

```go
func SecurityAttributes() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `SkipSourceDestCheck`<sup>Required</sup> <a name="SkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.skipSourceDestCheck"></a>

```go
func SkipSourceDestCheck() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails">DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails</a>

---


### DataOciCoreVnicAttachmentsVnicAttachmentsList <a name="DataOciCoreVnicAttachmentsVnicAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

dataocicorevnicattachments.NewDataOciCoreVnicAttachmentsVnicAttachmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreVnicAttachmentsVnicAttachmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.get"></a>

```go
func Get(index *f64) DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference <a name="DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevnicattachments"

dataocicorevnicattachments.NewDataOciCoreVnicAttachmentsVnicAttachmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.createVnicDetails">CreateVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList">DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.nicIndex">NicIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.vlanTag">VlanTag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.vnicId">VnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachments">DataOciCoreVnicAttachmentsVnicAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CreateVnicDetails`<sup>Required</sup> <a name="CreateVnicDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.createVnicDetails"></a>

```go
func CreateVnicDetails() DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList">DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `NicIndex`<sup>Required</sup> <a name="NicIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.nicIndex"></a>

```go
func NicIndex() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `VlanTag`<sup>Required</sup> <a name="VlanTag" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.vlanTag"></a>

```go
func VlanTag() *f64
```

- *Type:* *f64

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.vnicId"></a>

```go
func VnicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreVnicAttachmentsVnicAttachments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVnicAttachments.DataOciCoreVnicAttachmentsVnicAttachments">DataOciCoreVnicAttachmentsVnicAttachments</a>

---



