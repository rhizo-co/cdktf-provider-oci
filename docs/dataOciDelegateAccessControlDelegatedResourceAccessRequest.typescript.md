# `dataOciDelegateAccessControlDelegatedResourceAccessRequest` Submodule <a name="`dataOciDelegateAccessControlDelegatedResourceAccessRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequest <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequest" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request oci_delegate_access_control_delegated_resource_access_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequest } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest(scope: Construct, id: string, config: DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig">DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig">DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isConstruct"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequest } from 'rhizo-co-terraform-provider-oci'

dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isTerraformElement"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequest } from 'rhizo-co-terraform-provider-oci'

dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isTerraformDataSource"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequest } from 'rhizo-co-terraform-provider-oci'

dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.generateConfigForImport"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequest } from 'rhizo-co-terraform-provider-oci'

dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDelegateAccessControlDelegatedResourceAccessRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDelegateAccessControlDelegatedResourceAccessRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlDelegatedResourceAccessRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.approvalInfo">approvalInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList">DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.auditTypes">auditTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.closureComment">closureComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.databaseNameList">databaseNameList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.delegationControlId">delegationControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.delegationSubscriptionIds">delegationSubscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.durationInHours">durationInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.extendDurationInHours">extendDurationInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.isAutoApproved">isAutoApproved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.isPendingMoreInfo">isPendingMoreInfo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.numExtensionApprovals">numExtensionApprovals</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.numInitialApprovals">numInitialApprovals</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.providedServiceTypes">providedServiceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.reasonForRequest">reasonForRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.requestedActionNames">requestedActionNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.requesterType">requesterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.requestStatus">requestStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.ticketNumbers">ticketNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.timeAccessRequested">timeAccessRequested</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.delegatedResourceAccessRequestIdInput">delegatedResourceAccessRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.delegatedResourceAccessRequestId">delegatedResourceAccessRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `approvalInfo`<sup>Required</sup> <a name="approvalInfo" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.approvalInfo"></a>

```typescript
public readonly approvalInfo: DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList">DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList</a>

---

##### `auditTypes`<sup>Required</sup> <a name="auditTypes" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.auditTypes"></a>

```typescript
public readonly auditTypes: string[];
```

- *Type:* string[]

---

##### `closureComment`<sup>Required</sup> <a name="closureComment" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.closureComment"></a>

```typescript
public readonly closureComment: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseNameList`<sup>Required</sup> <a name="databaseNameList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.databaseNameList"></a>

```typescript
public readonly databaseNameList: string[];
```

- *Type:* string[]

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `delegationControlId`<sup>Required</sup> <a name="delegationControlId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.delegationControlId"></a>

```typescript
public readonly delegationControlId: string;
```

- *Type:* string

---

##### `delegationSubscriptionIds`<sup>Required</sup> <a name="delegationSubscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.delegationSubscriptionIds"></a>

```typescript
public readonly delegationSubscriptionIds: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `durationInHours`<sup>Required</sup> <a name="durationInHours" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.durationInHours"></a>

```typescript
public readonly durationInHours: number;
```

- *Type:* number

---

##### `extendDurationInHours`<sup>Required</sup> <a name="extendDurationInHours" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.extendDurationInHours"></a>

```typescript
public readonly extendDurationInHours: number;
```

- *Type:* number

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `isAutoApproved`<sup>Required</sup> <a name="isAutoApproved" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.isAutoApproved"></a>

```typescript
public readonly isAutoApproved: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPendingMoreInfo`<sup>Required</sup> <a name="isPendingMoreInfo" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.isPendingMoreInfo"></a>

```typescript
public readonly isPendingMoreInfo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.lifecycleStateDetails"></a>

```typescript
public readonly lifecycleStateDetails: string;
```

- *Type:* string

---

##### `numExtensionApprovals`<sup>Required</sup> <a name="numExtensionApprovals" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.numExtensionApprovals"></a>

```typescript
public readonly numExtensionApprovals: number;
```

- *Type:* number

---

##### `numInitialApprovals`<sup>Required</sup> <a name="numInitialApprovals" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.numInitialApprovals"></a>

```typescript
public readonly numInitialApprovals: number;
```

- *Type:* number

---

##### `providedServiceTypes`<sup>Required</sup> <a name="providedServiceTypes" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.providedServiceTypes"></a>

```typescript
public readonly providedServiceTypes: string[];
```

- *Type:* string[]

---

##### `reasonForRequest`<sup>Required</sup> <a name="reasonForRequest" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.reasonForRequest"></a>

```typescript
public readonly reasonForRequest: string;
```

- *Type:* string

---

##### `requestedActionNames`<sup>Required</sup> <a name="requestedActionNames" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.requestedActionNames"></a>

```typescript
public readonly requestedActionNames: string[];
```

- *Type:* string[]

---

##### `requesterType`<sup>Required</sup> <a name="requesterType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.requesterType"></a>

```typescript
public readonly requesterType: string;
```

- *Type:* string

---

##### `requestStatus`<sup>Required</sup> <a name="requestStatus" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.requestStatus"></a>

```typescript
public readonly requestStatus: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `ticketNumbers`<sup>Required</sup> <a name="ticketNumbers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.ticketNumbers"></a>

```typescript
public readonly ticketNumbers: string[];
```

- *Type:* string[]

---

##### `timeAccessRequested`<sup>Required</sup> <a name="timeAccessRequested" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.timeAccessRequested"></a>

```typescript
public readonly timeAccessRequested: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `delegatedResourceAccessRequestIdInput`<sup>Optional</sup> <a name="delegatedResourceAccessRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.delegatedResourceAccessRequestIdInput"></a>

```typescript
public readonly delegatedResourceAccessRequestIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `delegatedResourceAccessRequestId`<sup>Required</sup> <a name="delegatedResourceAccessRequestId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.delegatedResourceAccessRequestId"></a>

```typescript
public readonly delegatedResourceAccessRequestId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequest } from 'rhizo-co-terraform-provider-oci'

const dataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo: dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo = { ... }
```


### DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequest } from 'rhizo-co-terraform-provider-oci'

const dataOciDelegateAccessControlDelegatedResourceAccessRequestConfig: dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.delegatedResourceAccessRequestId">delegatedResourceAccessRequestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequest#delegated_resource_access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#id DataOciDelegateAccessControlDelegatedResourceAccessRequest#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `delegatedResourceAccessRequestId`<sup>Required</sup> <a name="delegatedResourceAccessRequestId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.delegatedResourceAccessRequestId"></a>

```typescript
public readonly delegatedResourceAccessRequestId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequest#delegated_resource_access_request_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#id DataOciDelegateAccessControlDelegatedResourceAccessRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequest } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.get"></a>

```typescript
public get(index: number): DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequest } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approvalAction">approvalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approvalType">approvalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approverAdditionalMessage">approverAdditionalMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approverComment">approverComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approverId">approverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.timeApprovedForAccess">timeApprovedForAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo">DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvalAction`<sup>Required</sup> <a name="approvalAction" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approvalAction"></a>

```typescript
public readonly approvalAction: string;
```

- *Type:* string

---

##### `approvalType`<sup>Required</sup> <a name="approvalType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approvalType"></a>

```typescript
public readonly approvalType: string;
```

- *Type:* string

---

##### `approverAdditionalMessage`<sup>Required</sup> <a name="approverAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approverAdditionalMessage"></a>

```typescript
public readonly approverAdditionalMessage: string;
```

- *Type:* string

---

##### `approverComment`<sup>Required</sup> <a name="approverComment" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approverComment"></a>

```typescript
public readonly approverComment: string;
```

- *Type:* string

---

##### `approverId`<sup>Required</sup> <a name="approverId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approverId"></a>

```typescript
public readonly approverId: string;
```

- *Type:* string

---

##### `timeApprovedForAccess`<sup>Required</sup> <a name="timeApprovedForAccess" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.timeApprovedForAccess"></a>

```typescript
public readonly timeApprovedForAccess: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo">DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo</a>

---



