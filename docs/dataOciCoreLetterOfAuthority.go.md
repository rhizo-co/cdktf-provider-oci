# `dataOciCoreLetterOfAuthority` Submodule <a name="`dataOciCoreLetterOfAuthority` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreLetterOfAuthority <a name="DataOciCoreLetterOfAuthority" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_letter_of_authority oci_core_letter_of_authority}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreletterofauthority"

dataocicoreletterofauthority.NewDataOciCoreLetterOfAuthority(scope Construct, id *string, config DataOciCoreLetterOfAuthorityConfig) DataOciCoreLetterOfAuthority
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig">DataOciCoreLetterOfAuthorityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig">DataOciCoreLetterOfAuthorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreLetterOfAuthority resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreletterofauthority"

dataocicoreletterofauthority.DataOciCoreLetterOfAuthority_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreletterofauthority"

dataocicoreletterofauthority.DataOciCoreLetterOfAuthority_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreletterofauthority"

dataocicoreletterofauthority.DataOciCoreLetterOfAuthority_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreletterofauthority"

dataocicoreletterofauthority.DataOciCoreLetterOfAuthority_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreLetterOfAuthority resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreLetterOfAuthority to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreLetterOfAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_letter_of_authority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreLetterOfAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.authorizedEntityName">AuthorizedEntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.circuitType">CircuitType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.facilityLocation">FacilityLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.timeExpires">TimeExpires</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.timeIssued">TimeIssued</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.crossConnectIdInput">CrossConnectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.crossConnectId">CrossConnectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AuthorizedEntityName`<sup>Required</sup> <a name="AuthorizedEntityName" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.authorizedEntityName"></a>

```go
func AuthorizedEntityName() *string
```

- *Type:* *string

---

##### `CircuitType`<sup>Required</sup> <a name="CircuitType" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.circuitType"></a>

```go
func CircuitType() *string
```

- *Type:* *string

---

##### `FacilityLocation`<sup>Required</sup> <a name="FacilityLocation" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.facilityLocation"></a>

```go
func FacilityLocation() *string
```

- *Type:* *string

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `TimeExpires`<sup>Required</sup> <a name="TimeExpires" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.timeExpires"></a>

```go
func TimeExpires() *string
```

- *Type:* *string

---

##### `TimeIssued`<sup>Required</sup> <a name="TimeIssued" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.timeIssued"></a>

```go
func TimeIssued() *string
```

- *Type:* *string

---

##### `CrossConnectIdInput`<sup>Optional</sup> <a name="CrossConnectIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.crossConnectIdInput"></a>

```go
func CrossConnectIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CrossConnectId`<sup>Required</sup> <a name="CrossConnectId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.crossConnectId"></a>

```go
func CrossConnectId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreLetterOfAuthorityConfig <a name="DataOciCoreLetterOfAuthorityConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreletterofauthority"

&dataocicoreletterofauthority.DataOciCoreLetterOfAuthorityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CrossConnectId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.crossConnectId">CrossConnectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_letter_of_authority#cross_connect_id DataOciCoreLetterOfAuthority#cross_connect_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_letter_of_authority#id DataOciCoreLetterOfAuthority#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CrossConnectId`<sup>Required</sup> <a name="CrossConnectId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.crossConnectId"></a>

```go
CrossConnectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_letter_of_authority#cross_connect_id DataOciCoreLetterOfAuthority#cross_connect_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_letter_of_authority#id DataOciCoreLetterOfAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


