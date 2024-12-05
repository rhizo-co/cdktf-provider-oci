# `dataOciOperatorAccessControlAccessRequest` Submodule <a name="`dataOciOperatorAccessControlAccessRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlAccessRequest <a name="DataOciOperatorAccessControlAccessRequest" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request oci_operator_access_control_access_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequest } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest(scope: Construct, id: string, config: DataOciOperatorAccessControlAccessRequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig">DataOciOperatorAccessControlAccessRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig">DataOciOperatorAccessControlAccessRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isConstruct"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequest } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformElement"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequest } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformDataSource"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequest } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequest } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOperatorAccessControlAccessRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOperatorAccessControlAccessRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlAccessRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessReasonSummary">accessReasonSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.actionRequestsList">actionRequestsList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.approverComment">approverComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.approverDetails">approverDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList">DataOciOperatorAccessControlAccessRequestApproverDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.auditType">auditType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.closureComment">closureComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.extendDuration">extendDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.extensionApproverDetails">extensionApproverDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList">DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.isAutoApproved">isAutoApproved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.isValidateAssignment">isValidateAssignment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfApprovers">numberOfApprovers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfApproversRequired">numberOfApproversRequired</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfExtensionApprovers">numberOfExtensionApprovers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlAdditionalMessage">opctlAdditionalMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlId">opctlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlName">opctlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.operatorId">operatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.requestId">requestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.subResourceList">subResourceList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.systemMessage">systemMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfCreation">timeOfCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfModification">timeOfModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfUserCreation">timeOfUserCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeRequestedForFutureAccess">timeRequestedForFutureAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.workflowId">workflowId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessRequestIdInput">accessRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessRequestId">accessRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessReasonSummary`<sup>Required</sup> <a name="accessReasonSummary" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessReasonSummary"></a>

```typescript
public readonly accessReasonSummary: string;
```

- *Type:* string

---

##### `actionRequestsList`<sup>Required</sup> <a name="actionRequestsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.actionRequestsList"></a>

```typescript
public readonly actionRequestsList: string[];
```

- *Type:* string[]

---

##### `approverComment`<sup>Required</sup> <a name="approverComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.approverComment"></a>

```typescript
public readonly approverComment: string;
```

- *Type:* string

---

##### `approverDetails`<sup>Required</sup> <a name="approverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.approverDetails"></a>

```typescript
public readonly approverDetails: DataOciOperatorAccessControlAccessRequestApproverDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList">DataOciOperatorAccessControlAccessRequestApproverDetailsList</a>

---

##### `auditType`<sup>Required</sup> <a name="auditType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.auditType"></a>

```typescript
public readonly auditType: string[];
```

- *Type:* string[]

---

##### `closureComment`<sup>Required</sup> <a name="closureComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.closureComment"></a>

```typescript
public readonly closureComment: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `extendDuration`<sup>Required</sup> <a name="extendDuration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.extendDuration"></a>

```typescript
public readonly extendDuration: number;
```

- *Type:* number

---

##### `extensionApproverDetails`<sup>Required</sup> <a name="extensionApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.extensionApproverDetails"></a>

```typescript
public readonly extensionApproverDetails: DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList">DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `isAutoApproved`<sup>Required</sup> <a name="isAutoApproved" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.isAutoApproved"></a>

```typescript
public readonly isAutoApproved: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isValidateAssignment`<sup>Required</sup> <a name="isValidateAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.isValidateAssignment"></a>

```typescript
public readonly isValidateAssignment: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `numberOfApprovers`<sup>Required</sup> <a name="numberOfApprovers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfApprovers"></a>

```typescript
public readonly numberOfApprovers: number;
```

- *Type:* number

---

##### `numberOfApproversRequired`<sup>Required</sup> <a name="numberOfApproversRequired" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfApproversRequired"></a>

```typescript
public readonly numberOfApproversRequired: number;
```

- *Type:* number

---

##### `numberOfExtensionApprovers`<sup>Required</sup> <a name="numberOfExtensionApprovers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfExtensionApprovers"></a>

```typescript
public readonly numberOfExtensionApprovers: number;
```

- *Type:* number

---

##### `opctlAdditionalMessage`<sup>Required</sup> <a name="opctlAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlAdditionalMessage"></a>

```typescript
public readonly opctlAdditionalMessage: string;
```

- *Type:* string

---

##### `opctlId`<sup>Required</sup> <a name="opctlId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlId"></a>

```typescript
public readonly opctlId: string;
```

- *Type:* string

---

##### `opctlName`<sup>Required</sup> <a name="opctlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlName"></a>

```typescript
public readonly opctlName: string;
```

- *Type:* string

---

##### `operatorId`<sup>Required</sup> <a name="operatorId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.operatorId"></a>

```typescript
public readonly operatorId: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.requestId"></a>

```typescript
public readonly requestId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subResourceList`<sup>Required</sup> <a name="subResourceList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.subResourceList"></a>

```typescript
public readonly subResourceList: string[];
```

- *Type:* string[]

---

##### `systemMessage`<sup>Required</sup> <a name="systemMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.systemMessage"></a>

```typescript
public readonly systemMessage: string;
```

- *Type:* string

---

##### `timeOfCreation`<sup>Required</sup> <a name="timeOfCreation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfCreation"></a>

```typescript
public readonly timeOfCreation: string;
```

- *Type:* string

---

##### `timeOfModification`<sup>Required</sup> <a name="timeOfModification" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfModification"></a>

```typescript
public readonly timeOfModification: string;
```

- *Type:* string

---

##### `timeOfUserCreation`<sup>Required</sup> <a name="timeOfUserCreation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfUserCreation"></a>

```typescript
public readonly timeOfUserCreation: string;
```

- *Type:* string

---

##### `timeRequestedForFutureAccess`<sup>Required</sup> <a name="timeRequestedForFutureAccess" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeRequestedForFutureAccess"></a>

```typescript
public readonly timeRequestedForFutureAccess: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.workflowId"></a>

```typescript
public readonly workflowId: string[];
```

- *Type:* string[]

---

##### `accessRequestIdInput`<sup>Optional</sup> <a name="accessRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessRequestIdInput"></a>

```typescript
public readonly accessRequestIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `accessRequestId`<sup>Required</sup> <a name="accessRequestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessRequestId"></a>

```typescript
public readonly accessRequestId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlAccessRequestApproverDetails <a name="DataOciOperatorAccessControlAccessRequestApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetails.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequest } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlAccessRequestApproverDetails: dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetails = { ... }
```


### DataOciOperatorAccessControlAccessRequestConfig <a name="DataOciOperatorAccessControlAccessRequestConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequest } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlAccessRequestConfig: dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.accessRequestId">accessRequestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#access_request_id DataOciOperatorAccessControlAccessRequest#access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#id DataOciOperatorAccessControlAccessRequest#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessRequestId`<sup>Required</sup> <a name="accessRequestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.accessRequestId"></a>

```typescript
public readonly accessRequestId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#access_request_id DataOciOperatorAccessControlAccessRequest#access_request_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#id DataOciOperatorAccessControlAccessRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOperatorAccessControlAccessRequestExtensionApproverDetails <a name="DataOciOperatorAccessControlAccessRequestExtensionApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetails.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequest } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlAccessRequestExtensionApproverDetails: dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOperatorAccessControlAccessRequestApproverDetailsList <a name="DataOciOperatorAccessControlAccessRequestApproverDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequest } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.get"></a>

```typescript
public get(index: number): DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference <a name="DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequest } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalAction">approvalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalAdditionalMessage">approvalAdditionalMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalComment">approvalComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approverId">approverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.timeApprovedForAccess">timeApprovedForAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.timeOfAuthorization">timeOfAuthorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetails">DataOciOperatorAccessControlAccessRequestApproverDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvalAction`<sup>Required</sup> <a name="approvalAction" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalAction"></a>

```typescript
public readonly approvalAction: string;
```

- *Type:* string

---

##### `approvalAdditionalMessage`<sup>Required</sup> <a name="approvalAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalAdditionalMessage"></a>

```typescript
public readonly approvalAdditionalMessage: string;
```

- *Type:* string

---

##### `approvalComment`<sup>Required</sup> <a name="approvalComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalComment"></a>

```typescript
public readonly approvalComment: string;
```

- *Type:* string

---

##### `approverId`<sup>Required</sup> <a name="approverId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approverId"></a>

```typescript
public readonly approverId: string;
```

- *Type:* string

---

##### `timeApprovedForAccess`<sup>Required</sup> <a name="timeApprovedForAccess" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.timeApprovedForAccess"></a>

```typescript
public readonly timeApprovedForAccess: string;
```

- *Type:* string

---

##### `timeOfAuthorization`<sup>Required</sup> <a name="timeOfAuthorization" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.timeOfAuthorization"></a>

```typescript
public readonly timeOfAuthorization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOperatorAccessControlAccessRequestApproverDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetails">DataOciOperatorAccessControlAccessRequestApproverDetails</a>

---


### DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList <a name="DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequest } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.get"></a>

```typescript
public get(index: number): DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference <a name="DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequest } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalAction">approvalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalAdditionalMessage">approvalAdditionalMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalComment">approvalComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approverId">approverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.timeApprovedForAccess">timeApprovedForAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.timeOfAuthorization">timeOfAuthorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetails">DataOciOperatorAccessControlAccessRequestExtensionApproverDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvalAction`<sup>Required</sup> <a name="approvalAction" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalAction"></a>

```typescript
public readonly approvalAction: string;
```

- *Type:* string

---

##### `approvalAdditionalMessage`<sup>Required</sup> <a name="approvalAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalAdditionalMessage"></a>

```typescript
public readonly approvalAdditionalMessage: string;
```

- *Type:* string

---

##### `approvalComment`<sup>Required</sup> <a name="approvalComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalComment"></a>

```typescript
public readonly approvalComment: string;
```

- *Type:* string

---

##### `approverId`<sup>Required</sup> <a name="approverId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approverId"></a>

```typescript
public readonly approverId: string;
```

- *Type:* string

---

##### `timeApprovedForAccess`<sup>Required</sup> <a name="timeApprovedForAccess" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.timeApprovedForAccess"></a>

```typescript
public readonly timeApprovedForAccess: string;
```

- *Type:* string

---

##### `timeOfAuthorization`<sup>Required</sup> <a name="timeOfAuthorization" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.timeOfAuthorization"></a>

```typescript
public readonly timeOfAuthorization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOperatorAccessControlAccessRequestExtensionApproverDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetails">DataOciOperatorAccessControlAccessRequestExtensionApproverDetails</a>

---



