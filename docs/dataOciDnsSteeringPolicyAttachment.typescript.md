# `dataOciDnsSteeringPolicyAttachment` Submodule <a name="`dataOciDnsSteeringPolicyAttachment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDnsSteeringPolicyAttachment <a name="DataOciDnsSteeringPolicyAttachment" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachment oci_dns_steering_policy_attachment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.Initializer"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachment } from 'rhizo-co-terraform-provider-oci'

new dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment(scope: Construct, id: string, config: DataOciDnsSteeringPolicyAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig">DataOciDnsSteeringPolicyAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig">DataOciDnsSteeringPolicyAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDnsSteeringPolicyAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.isConstruct"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachment } from 'rhizo-co-terraform-provider-oci'

dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.isTerraformElement"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachment } from 'rhizo-co-terraform-provider-oci'

dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.isTerraformDataSource"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachment } from 'rhizo-co-terraform-provider-oci'

dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.generateConfigForImport"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachment } from 'rhizo-co-terraform-provider-oci'

dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDnsSteeringPolicyAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDnsSteeringPolicyAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDnsSteeringPolicyAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDnsSteeringPolicyAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.rtypes">rtypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.selfAttribute">selfAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.steeringPolicyId">steeringPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.steeringPolicyAttachmentIdInput">steeringPolicyAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.steeringPolicyAttachmentId">steeringPolicyAttachmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rtypes`<sup>Required</sup> <a name="rtypes" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.rtypes"></a>

```typescript
public readonly rtypes: string[];
```

- *Type:* string[]

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `steeringPolicyId`<sup>Required</sup> <a name="steeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.steeringPolicyId"></a>

```typescript
public readonly steeringPolicyId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `steeringPolicyAttachmentIdInput`<sup>Optional</sup> <a name="steeringPolicyAttachmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.steeringPolicyAttachmentIdInput"></a>

```typescript
public readonly steeringPolicyAttachmentIdInput: string;
```

- *Type:* string

---

##### `steeringPolicyAttachmentId`<sup>Required</sup> <a name="steeringPolicyAttachmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.steeringPolicyAttachmentId"></a>

```typescript
public readonly steeringPolicyAttachmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDnsSteeringPolicyAttachmentConfig <a name="DataOciDnsSteeringPolicyAttachmentConfig" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.Initializer"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachment } from 'rhizo-co-terraform-provider-oci'

const dataOciDnsSteeringPolicyAttachmentConfig: dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.property.steeringPolicyAttachmentId">steeringPolicyAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachment#steering_policy_attachment_id DataOciDnsSteeringPolicyAttachment#steering_policy_attachment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `steeringPolicyAttachmentId`<sup>Required</sup> <a name="steeringPolicyAttachmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachment.DataOciDnsSteeringPolicyAttachmentConfig.property.steeringPolicyAttachmentId"></a>

```typescript
public readonly steeringPolicyAttachmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachment#steering_policy_attachment_id DataOciDnsSteeringPolicyAttachment#steering_policy_attachment_id}.

---



