# `dataOciOpaOpaInstance` Submodule <a name="`dataOciOpaOpaInstance` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpaOpaInstance <a name="DataOciOpaOpaInstance" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opa_opa_instance oci_opa_opa_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.Initializer"></a>

```typescript
import { dataOciOpaOpaInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciOpaOpaInstance.DataOciOpaOpaInstance(scope: Construct, id: string, config: DataOciOpaOpaInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig">DataOciOpaOpaInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig">DataOciOpaOpaInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpaOpaInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.isConstruct"></a>

```typescript
import { dataOciOpaOpaInstance } from 'rhizo-co-terraform-provider-oci'

dataOciOpaOpaInstance.DataOciOpaOpaInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.isTerraformElement"></a>

```typescript
import { dataOciOpaOpaInstance } from 'rhizo-co-terraform-provider-oci'

dataOciOpaOpaInstance.DataOciOpaOpaInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.isTerraformDataSource"></a>

```typescript
import { dataOciOpaOpaInstance } from 'rhizo-co-terraform-provider-oci'

dataOciOpaOpaInstance.DataOciOpaOpaInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.generateConfigForImport"></a>

```typescript
import { dataOciOpaOpaInstance } from 'rhizo-co-terraform-provider-oci'

dataOciOpaOpaInstance.DataOciOpaOpaInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpaOpaInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpaOpaInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpaOpaInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opa_opa_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpaOpaInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.attachments">attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList">DataOciOpaOpaInstanceAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.consumptionModel">consumptionModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.idcsAt">idcsAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.identityAppDisplayName">identityAppDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.identityAppGuid">identityAppGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.identityAppOpcServiceInstanceGuid">identityAppOpcServiceInstanceGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.identityDomainUrl">identityDomainUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.isBreakglassEnabled">isBreakglassEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.meteringType">meteringType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.opaInstanceIdInput">opaInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.opaInstanceId">opaInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.attachments"></a>

```typescript
public readonly attachments: DataOciOpaOpaInstanceAttachmentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList">DataOciOpaOpaInstanceAttachmentsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `consumptionModel`<sup>Required</sup> <a name="consumptionModel" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.consumptionModel"></a>

```typescript
public readonly consumptionModel: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsAt`<sup>Required</sup> <a name="idcsAt" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.idcsAt"></a>

```typescript
public readonly idcsAt: string;
```

- *Type:* string

---

##### `identityAppDisplayName`<sup>Required</sup> <a name="identityAppDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.identityAppDisplayName"></a>

```typescript
public readonly identityAppDisplayName: string;
```

- *Type:* string

---

##### `identityAppGuid`<sup>Required</sup> <a name="identityAppGuid" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.identityAppGuid"></a>

```typescript
public readonly identityAppGuid: string;
```

- *Type:* string

---

##### `identityAppOpcServiceInstanceGuid`<sup>Required</sup> <a name="identityAppOpcServiceInstanceGuid" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.identityAppOpcServiceInstanceGuid"></a>

```typescript
public readonly identityAppOpcServiceInstanceGuid: string;
```

- *Type:* string

---

##### `identityDomainUrl`<sup>Required</sup> <a name="identityDomainUrl" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.identityDomainUrl"></a>

```typescript
public readonly identityDomainUrl: string;
```

- *Type:* string

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

##### `isBreakglassEnabled`<sup>Required</sup> <a name="isBreakglassEnabled" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.isBreakglassEnabled"></a>

```typescript
public readonly isBreakglassEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `meteringType`<sup>Required</sup> <a name="meteringType" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.meteringType"></a>

```typescript
public readonly meteringType: string;
```

- *Type:* string

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `opaInstanceIdInput`<sup>Optional</sup> <a name="opaInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.opaInstanceIdInput"></a>

```typescript
public readonly opaInstanceIdInput: string;
```

- *Type:* string

---

##### `opaInstanceId`<sup>Required</sup> <a name="opaInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.opaInstanceId"></a>

```typescript
public readonly opaInstanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpaOpaInstanceAttachments <a name="DataOciOpaOpaInstanceAttachments" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachments.Initializer"></a>

```typescript
import { dataOciOpaOpaInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciOpaOpaInstanceAttachments: dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachments = { ... }
```


### DataOciOpaOpaInstanceConfig <a name="DataOciOpaOpaInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.Initializer"></a>

```typescript
import { dataOciOpaOpaInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciOpaOpaInstanceConfig: dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.property.opaInstanceId">opaInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opa_opa_instance#opa_instance_id DataOciOpaOpaInstance#opa_instance_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `opaInstanceId`<sup>Required</sup> <a name="opaInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceConfig.property.opaInstanceId"></a>

```typescript
public readonly opaInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opa_opa_instance#opa_instance_id DataOciOpaOpaInstance#opa_instance_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOpaOpaInstanceAttachmentsList <a name="DataOciOpaOpaInstanceAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.Initializer"></a>

```typescript
import { dataOciOpaOpaInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.get"></a>

```typescript
public get(index: number): DataOciOpaOpaInstanceAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpaOpaInstanceAttachmentsOutputReference <a name="DataOciOpaOpaInstanceAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.Initializer"></a>

```typescript
import { dataOciOpaOpaInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.property.isImplicit">isImplicit</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.property.targetInstanceUrl">targetInstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.property.targetRole">targetRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.property.targetServiceType">targetServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachments">DataOciOpaOpaInstanceAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isImplicit`<sup>Required</sup> <a name="isImplicit" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.property.isImplicit"></a>

```typescript
public readonly isImplicit: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `targetInstanceUrl`<sup>Required</sup> <a name="targetInstanceUrl" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.property.targetInstanceUrl"></a>

```typescript
public readonly targetInstanceUrl: string;
```

- *Type:* string

---

##### `targetRole`<sup>Required</sup> <a name="targetRole" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.property.targetRole"></a>

```typescript
public readonly targetRole: string;
```

- *Type:* string

---

##### `targetServiceType`<sup>Required</sup> <a name="targetServiceType" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.property.targetServiceType"></a>

```typescript
public readonly targetServiceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpaOpaInstanceAttachments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpaOpaInstance.DataOciOpaOpaInstanceAttachments">DataOciOpaOpaInstanceAttachments</a>

---



