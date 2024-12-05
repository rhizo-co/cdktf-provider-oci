# `dataOciOnesubscriptionSubscribedService` Submodule <a name="`dataOciOnesubscriptionSubscribedService` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionSubscribedService <a name="DataOciOnesubscriptionSubscribedService" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service oci_onesubscription_subscribed_service}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService(scope: Construct, id: string, config: DataOciOnesubscriptionSubscribedServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig">DataOciOnesubscriptionSubscribedServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig">DataOciOnesubscriptionSubscribedServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFields` <a name="resetFields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionSubscribedService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isConstruct"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformElement"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformDataSource"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOnesubscriptionSubscribedService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOnesubscriptionSubscribedService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOnesubscriptionSubscribedService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionSubscribedService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.adminEmail">adminEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementId">agreementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementName">agreementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementType">agreementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.availableAmount">availableAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billingFrequency">billingFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToAddress">billToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList">DataOciOnesubscriptionSubscribedServiceBillToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToContact">billToContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList">DataOciOnesubscriptionSubscribedServiceBillToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToCustomer">billToCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList">DataOciOnesubscriptionSubscribedServiceBillToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.bookingOptyNumber">bookingOptyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.buyerEmail">buyerEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.commitmentScheduleId">commitmentScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.commitmentServices">commitmentServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList">DataOciOnesubscriptionSubscribedServiceCommitmentServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.creditPercentage">creditPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.csi">csi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.customerTransactionReference">customerTransactionReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dataCenter">dataCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dataCenterRegion">dataCenterRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.eligibleToRenew">eligibleToRenew</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserAddress">endUserAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList">DataOciOnesubscriptionSubscribedServiceEndUserAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserContact">endUserContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList">DataOciOnesubscriptionSubscribedServiceEndUserContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserCustomer">endUserCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList">DataOciOnesubscriptionSubscribedServiceEndUserCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fulfillmentSet">fulfillmentSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fundedAllocationValue">fundedAllocationValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isAllowance">isAllowance</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isCapToPriceList">isCapToPriceList</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isCreditEnabled">isCreditEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isHavingUsage">isHavingUsage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isIntentToPay">isIntentToPay</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isPayg">isPayg</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isSingleRateCard">isSingleRateCard</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isVariableCommitment">isVariableCommitment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.lineNetAmount">lineNetAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.majorSet">majorSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.netUnitPrice">netUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.operationType">operationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderHeaderId">orderHeaderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderLineId">orderLineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderLineNumber">orderLineNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderNumber">orderNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderType">orderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.originalPromoAmount">originalPromoAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overageBillTo">overageBillTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overageDiscountPercentage">overageDiscountPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overagePolicy">overagePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.partnerCreditAmount">partnerCreditAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.partnerTransactionType">partnerTransactionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paygPolicy">paygPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentMethod">paymentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentNumber">paymentNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentTerm">paymentTerm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList">DataOciOnesubscriptionSubscribedServicePaymentTermList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.pricePeriod">pricePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.pricingModel">pricingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList">DataOciOnesubscriptionSubscribedServiceProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.programType">programType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promoOrderLineId">promoOrderLineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promotionPricingType">promotionPricingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promoType">promoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.provisioningSource">provisioningSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.quantity">quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.rateCardDiscountPercentage">rateCardDiscountPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.rateCards">rateCards</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList">DataOciOnesubscriptionSubscribedServiceRateCardsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.ratecardType">ratecardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyId">renewalOptyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyNumber">renewalOptyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyType">renewalOptyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewedSubscribedServiceId">renewedSubscribedServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerAddress">resellerAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList">DataOciOnesubscriptionSubscribedServiceResellerAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerContact">resellerContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList">DataOciOnesubscriptionSubscribedServiceResellerContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerCustomer">resellerCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList">DataOciOnesubscriptionSubscribedServiceResellerCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revenueLineId">revenueLineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revenueLineNumber">revenueLineNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revisedArrInLc">revisedArrInLc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revisedArrInSc">revisedArrInSc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.salesAccountPartyId">salesAccountPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.salesChannel">salesChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToAddress">serviceToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList">DataOciOnesubscriptionSubscribedServiceServiceToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToContact">serviceToContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList">DataOciOnesubscriptionSubscribedServiceServiceToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToCustomer">serviceToCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList">DataOciOnesubscriptionSubscribedServiceServiceToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.soldToContact">soldToContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList">DataOciOnesubscriptionSubscribedServiceSoldToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.soldToCustomer">soldToCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList">DataOciOnesubscriptionSubscribedServiceSoldToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.startDateType">startDateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscriptionSource">subscriptionSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemArrInLc">systemArrInLc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemArrInSc">systemArrInSc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemAtrArrInLc">systemAtrArrInLc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemAtrArrInSc">systemAtrArrInSc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.termValue">termValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.termValueUom">termValueUom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeAgreementEnd">timeAgreementEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeCustomerConfig">timeCustomerConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeMajorsetEnd">timeMajorsetEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeMajorsetStart">timeMajorsetStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timePaymentExpiry">timePaymentExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeProvisioned">timeProvisioned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeServiceConfigurationEmailSent">timeServiceConfigurationEmailSent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeWelcomeEmailSent">timeWelcomeEmailSent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.totalValue">totalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.transactionExtensionId">transactionExtensionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.usedAmount">usedAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fieldsInput">fieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscribedServiceIdInput">subscribedServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fields">fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscribedServiceId">subscribedServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `adminEmail`<sup>Required</sup> <a name="adminEmail" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.adminEmail"></a>

```typescript
public readonly adminEmail: string;
```

- *Type:* string

---

##### `agreementId`<sup>Required</sup> <a name="agreementId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementId"></a>

```typescript
public readonly agreementId: string;
```

- *Type:* string

---

##### `agreementName`<sup>Required</sup> <a name="agreementName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementName"></a>

```typescript
public readonly agreementName: string;
```

- *Type:* string

---

##### `agreementType`<sup>Required</sup> <a name="agreementType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementType"></a>

```typescript
public readonly agreementType: string;
```

- *Type:* string

---

##### `availableAmount`<sup>Required</sup> <a name="availableAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.availableAmount"></a>

```typescript
public readonly availableAmount: string;
```

- *Type:* string

---

##### `billingFrequency`<sup>Required</sup> <a name="billingFrequency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billingFrequency"></a>

```typescript
public readonly billingFrequency: string;
```

- *Type:* string

---

##### `billToAddress`<sup>Required</sup> <a name="billToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToAddress"></a>

```typescript
public readonly billToAddress: DataOciOnesubscriptionSubscribedServiceBillToAddressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList">DataOciOnesubscriptionSubscribedServiceBillToAddressList</a>

---

##### `billToContact`<sup>Required</sup> <a name="billToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToContact"></a>

```typescript
public readonly billToContact: DataOciOnesubscriptionSubscribedServiceBillToContactList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList">DataOciOnesubscriptionSubscribedServiceBillToContactList</a>

---

##### `billToCustomer`<sup>Required</sup> <a name="billToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToCustomer"></a>

```typescript
public readonly billToCustomer: DataOciOnesubscriptionSubscribedServiceBillToCustomerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList">DataOciOnesubscriptionSubscribedServiceBillToCustomerList</a>

---

##### `bookingOptyNumber`<sup>Required</sup> <a name="bookingOptyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.bookingOptyNumber"></a>

```typescript
public readonly bookingOptyNumber: string;
```

- *Type:* string

---

##### `buyerEmail`<sup>Required</sup> <a name="buyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.buyerEmail"></a>

```typescript
public readonly buyerEmail: string;
```

- *Type:* string

---

##### `commitmentScheduleId`<sup>Required</sup> <a name="commitmentScheduleId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.commitmentScheduleId"></a>

```typescript
public readonly commitmentScheduleId: string;
```

- *Type:* string

---

##### `commitmentServices`<sup>Required</sup> <a name="commitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.commitmentServices"></a>

```typescript
public readonly commitmentServices: DataOciOnesubscriptionSubscribedServiceCommitmentServicesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList">DataOciOnesubscriptionSubscribedServiceCommitmentServicesList</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `creditPercentage`<sup>Required</sup> <a name="creditPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.creditPercentage"></a>

```typescript
public readonly creditPercentage: string;
```

- *Type:* string

---

##### `csi`<sup>Required</sup> <a name="csi" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.csi"></a>

```typescript
public readonly csi: string;
```

- *Type:* string

---

##### `customerTransactionReference`<sup>Required</sup> <a name="customerTransactionReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.customerTransactionReference"></a>

```typescript
public readonly customerTransactionReference: string;
```

- *Type:* string

---

##### `dataCenter`<sup>Required</sup> <a name="dataCenter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dataCenter"></a>

```typescript
public readonly dataCenter: string;
```

- *Type:* string

---

##### `dataCenterRegion`<sup>Required</sup> <a name="dataCenterRegion" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dataCenterRegion"></a>

```typescript
public readonly dataCenterRegion: string;
```

- *Type:* string

---

##### `eligibleToRenew`<sup>Required</sup> <a name="eligibleToRenew" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.eligibleToRenew"></a>

```typescript
public readonly eligibleToRenew: string;
```

- *Type:* string

---

##### `endUserAddress`<sup>Required</sup> <a name="endUserAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserAddress"></a>

```typescript
public readonly endUserAddress: DataOciOnesubscriptionSubscribedServiceEndUserAddressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList">DataOciOnesubscriptionSubscribedServiceEndUserAddressList</a>

---

##### `endUserContact`<sup>Required</sup> <a name="endUserContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserContact"></a>

```typescript
public readonly endUserContact: DataOciOnesubscriptionSubscribedServiceEndUserContactList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList">DataOciOnesubscriptionSubscribedServiceEndUserContactList</a>

---

##### `endUserCustomer`<sup>Required</sup> <a name="endUserCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserCustomer"></a>

```typescript
public readonly endUserCustomer: DataOciOnesubscriptionSubscribedServiceEndUserCustomerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList">DataOciOnesubscriptionSubscribedServiceEndUserCustomerList</a>

---

##### `fulfillmentSet`<sup>Required</sup> <a name="fulfillmentSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fulfillmentSet"></a>

```typescript
public readonly fulfillmentSet: string;
```

- *Type:* string

---

##### `fundedAllocationValue`<sup>Required</sup> <a name="fundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fundedAllocationValue"></a>

```typescript
public readonly fundedAllocationValue: string;
```

- *Type:* string

---

##### `isAllowance`<sup>Required</sup> <a name="isAllowance" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isAllowance"></a>

```typescript
public readonly isAllowance: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isCapToPriceList`<sup>Required</sup> <a name="isCapToPriceList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isCapToPriceList"></a>

```typescript
public readonly isCapToPriceList: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isCreditEnabled`<sup>Required</sup> <a name="isCreditEnabled" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isCreditEnabled"></a>

```typescript
public readonly isCreditEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHavingUsage`<sup>Required</sup> <a name="isHavingUsage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isHavingUsage"></a>

```typescript
public readonly isHavingUsage: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isIntentToPay`<sup>Required</sup> <a name="isIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isIntentToPay"></a>

```typescript
public readonly isIntentToPay: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPayg`<sup>Required</sup> <a name="isPayg" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isPayg"></a>

```typescript
public readonly isPayg: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSingleRateCard`<sup>Required</sup> <a name="isSingleRateCard" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isSingleRateCard"></a>

```typescript
public readonly isSingleRateCard: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isVariableCommitment`<sup>Required</sup> <a name="isVariableCommitment" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isVariableCommitment"></a>

```typescript
public readonly isVariableCommitment: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lineNetAmount`<sup>Required</sup> <a name="lineNetAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.lineNetAmount"></a>

```typescript
public readonly lineNetAmount: string;
```

- *Type:* string

---

##### `majorSet`<sup>Required</sup> <a name="majorSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.majorSet"></a>

```typescript
public readonly majorSet: string;
```

- *Type:* string

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.netUnitPrice"></a>

```typescript
public readonly netUnitPrice: string;
```

- *Type:* string

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.operationType"></a>

```typescript
public readonly operationType: string;
```

- *Type:* string

---

##### `orderHeaderId`<sup>Required</sup> <a name="orderHeaderId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderHeaderId"></a>

```typescript
public readonly orderHeaderId: string;
```

- *Type:* string

---

##### `orderLineId`<sup>Required</sup> <a name="orderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderLineId"></a>

```typescript
public readonly orderLineId: string;
```

- *Type:* string

---

##### `orderLineNumber`<sup>Required</sup> <a name="orderLineNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderLineNumber"></a>

```typescript
public readonly orderLineNumber: number;
```

- *Type:* number

---

##### `orderNumber`<sup>Required</sup> <a name="orderNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderNumber"></a>

```typescript
public readonly orderNumber: string;
```

- *Type:* string

---

##### `orderType`<sup>Required</sup> <a name="orderType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderType"></a>

```typescript
public readonly orderType: string;
```

- *Type:* string

---

##### `originalPromoAmount`<sup>Required</sup> <a name="originalPromoAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.originalPromoAmount"></a>

```typescript
public readonly originalPromoAmount: string;
```

- *Type:* string

---

##### `overageBillTo`<sup>Required</sup> <a name="overageBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overageBillTo"></a>

```typescript
public readonly overageBillTo: string;
```

- *Type:* string

---

##### `overageDiscountPercentage`<sup>Required</sup> <a name="overageDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overageDiscountPercentage"></a>

```typescript
public readonly overageDiscountPercentage: string;
```

- *Type:* string

---

##### `overagePolicy`<sup>Required</sup> <a name="overagePolicy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overagePolicy"></a>

```typescript
public readonly overagePolicy: string;
```

- *Type:* string

---

##### `partnerCreditAmount`<sup>Required</sup> <a name="partnerCreditAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.partnerCreditAmount"></a>

```typescript
public readonly partnerCreditAmount: string;
```

- *Type:* string

---

##### `partnerTransactionType`<sup>Required</sup> <a name="partnerTransactionType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.partnerTransactionType"></a>

```typescript
public readonly partnerTransactionType: string;
```

- *Type:* string

---

##### `paygPolicy`<sup>Required</sup> <a name="paygPolicy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paygPolicy"></a>

```typescript
public readonly paygPolicy: string;
```

- *Type:* string

---

##### `paymentMethod`<sup>Required</sup> <a name="paymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentMethod"></a>

```typescript
public readonly paymentMethod: string;
```

- *Type:* string

---

##### `paymentNumber`<sup>Required</sup> <a name="paymentNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentNumber"></a>

```typescript
public readonly paymentNumber: string;
```

- *Type:* string

---

##### `paymentTerm`<sup>Required</sup> <a name="paymentTerm" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentTerm"></a>

```typescript
public readonly paymentTerm: DataOciOnesubscriptionSubscribedServicePaymentTermList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList">DataOciOnesubscriptionSubscribedServicePaymentTermList</a>

---

##### `pricePeriod`<sup>Required</sup> <a name="pricePeriod" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.pricePeriod"></a>

```typescript
public readonly pricePeriod: string;
```

- *Type:* string

---

##### `pricingModel`<sup>Required</sup> <a name="pricingModel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.pricingModel"></a>

```typescript
public readonly pricingModel: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.product"></a>

```typescript
public readonly product: DataOciOnesubscriptionSubscribedServiceProductList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList">DataOciOnesubscriptionSubscribedServiceProductList</a>

---

##### `programType`<sup>Required</sup> <a name="programType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.programType"></a>

```typescript
public readonly programType: string;
```

- *Type:* string

---

##### `promoOrderLineId`<sup>Required</sup> <a name="promoOrderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promoOrderLineId"></a>

```typescript
public readonly promoOrderLineId: string;
```

- *Type:* string

---

##### `promotionPricingType`<sup>Required</sup> <a name="promotionPricingType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promotionPricingType"></a>

```typescript
public readonly promotionPricingType: string;
```

- *Type:* string

---

##### `promoType`<sup>Required</sup> <a name="promoType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promoType"></a>

```typescript
public readonly promoType: string;
```

- *Type:* string

---

##### `provisioningSource`<sup>Required</sup> <a name="provisioningSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.provisioningSource"></a>

```typescript
public readonly provisioningSource: string;
```

- *Type:* string

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.quantity"></a>

```typescript
public readonly quantity: string;
```

- *Type:* string

---

##### `rateCardDiscountPercentage`<sup>Required</sup> <a name="rateCardDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.rateCardDiscountPercentage"></a>

```typescript
public readonly rateCardDiscountPercentage: string;
```

- *Type:* string

---

##### `rateCards`<sup>Required</sup> <a name="rateCards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.rateCards"></a>

```typescript
public readonly rateCards: DataOciOnesubscriptionSubscribedServiceRateCardsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList">DataOciOnesubscriptionSubscribedServiceRateCardsList</a>

---

##### `ratecardType`<sup>Required</sup> <a name="ratecardType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.ratecardType"></a>

```typescript
public readonly ratecardType: string;
```

- *Type:* string

---

##### `renewalOptyId`<sup>Required</sup> <a name="renewalOptyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyId"></a>

```typescript
public readonly renewalOptyId: string;
```

- *Type:* string

---

##### `renewalOptyNumber`<sup>Required</sup> <a name="renewalOptyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyNumber"></a>

```typescript
public readonly renewalOptyNumber: string;
```

- *Type:* string

---

##### `renewalOptyType`<sup>Required</sup> <a name="renewalOptyType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyType"></a>

```typescript
public readonly renewalOptyType: string;
```

- *Type:* string

---

##### `renewedSubscribedServiceId`<sup>Required</sup> <a name="renewedSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewedSubscribedServiceId"></a>

```typescript
public readonly renewedSubscribedServiceId: string;
```

- *Type:* string

---

##### `resellerAddress`<sup>Required</sup> <a name="resellerAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerAddress"></a>

```typescript
public readonly resellerAddress: DataOciOnesubscriptionSubscribedServiceResellerAddressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList">DataOciOnesubscriptionSubscribedServiceResellerAddressList</a>

---

##### `resellerContact`<sup>Required</sup> <a name="resellerContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerContact"></a>

```typescript
public readonly resellerContact: DataOciOnesubscriptionSubscribedServiceResellerContactList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList">DataOciOnesubscriptionSubscribedServiceResellerContactList</a>

---

##### `resellerCustomer`<sup>Required</sup> <a name="resellerCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerCustomer"></a>

```typescript
public readonly resellerCustomer: DataOciOnesubscriptionSubscribedServiceResellerCustomerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList">DataOciOnesubscriptionSubscribedServiceResellerCustomerList</a>

---

##### `revenueLineId`<sup>Required</sup> <a name="revenueLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revenueLineId"></a>

```typescript
public readonly revenueLineId: string;
```

- *Type:* string

---

##### `revenueLineNumber`<sup>Required</sup> <a name="revenueLineNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revenueLineNumber"></a>

```typescript
public readonly revenueLineNumber: string;
```

- *Type:* string

---

##### `revisedArrInLc`<sup>Required</sup> <a name="revisedArrInLc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revisedArrInLc"></a>

```typescript
public readonly revisedArrInLc: string;
```

- *Type:* string

---

##### `revisedArrInSc`<sup>Required</sup> <a name="revisedArrInSc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revisedArrInSc"></a>

```typescript
public readonly revisedArrInSc: string;
```

- *Type:* string

---

##### `salesAccountPartyId`<sup>Required</sup> <a name="salesAccountPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.salesAccountPartyId"></a>

```typescript
public readonly salesAccountPartyId: string;
```

- *Type:* string

---

##### `salesChannel`<sup>Required</sup> <a name="salesChannel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.salesChannel"></a>

```typescript
public readonly salesChannel: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `serviceToAddress`<sup>Required</sup> <a name="serviceToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToAddress"></a>

```typescript
public readonly serviceToAddress: DataOciOnesubscriptionSubscribedServiceServiceToAddressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList">DataOciOnesubscriptionSubscribedServiceServiceToAddressList</a>

---

##### `serviceToContact`<sup>Required</sup> <a name="serviceToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToContact"></a>

```typescript
public readonly serviceToContact: DataOciOnesubscriptionSubscribedServiceServiceToContactList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList">DataOciOnesubscriptionSubscribedServiceServiceToContactList</a>

---

##### `serviceToCustomer`<sup>Required</sup> <a name="serviceToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToCustomer"></a>

```typescript
public readonly serviceToCustomer: DataOciOnesubscriptionSubscribedServiceServiceToCustomerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList">DataOciOnesubscriptionSubscribedServiceServiceToCustomerList</a>

---

##### `soldToContact`<sup>Required</sup> <a name="soldToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.soldToContact"></a>

```typescript
public readonly soldToContact: DataOciOnesubscriptionSubscribedServiceSoldToContactList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList">DataOciOnesubscriptionSubscribedServiceSoldToContactList</a>

---

##### `soldToCustomer`<sup>Required</sup> <a name="soldToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.soldToCustomer"></a>

```typescript
public readonly soldToCustomer: DataOciOnesubscriptionSubscribedServiceSoldToCustomerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList">DataOciOnesubscriptionSubscribedServiceSoldToCustomerList</a>

---

##### `startDateType`<sup>Required</sup> <a name="startDateType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.startDateType"></a>

```typescript
public readonly startDateType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `subscriptionSource`<sup>Required</sup> <a name="subscriptionSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscriptionSource"></a>

```typescript
public readonly subscriptionSource: string;
```

- *Type:* string

---

##### `systemArrInLc`<sup>Required</sup> <a name="systemArrInLc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemArrInLc"></a>

```typescript
public readonly systemArrInLc: string;
```

- *Type:* string

---

##### `systemArrInSc`<sup>Required</sup> <a name="systemArrInSc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemArrInSc"></a>

```typescript
public readonly systemArrInSc: string;
```

- *Type:* string

---

##### `systemAtrArrInLc`<sup>Required</sup> <a name="systemAtrArrInLc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemAtrArrInLc"></a>

```typescript
public readonly systemAtrArrInLc: string;
```

- *Type:* string

---

##### `systemAtrArrInSc`<sup>Required</sup> <a name="systemAtrArrInSc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemAtrArrInSc"></a>

```typescript
public readonly systemAtrArrInSc: string;
```

- *Type:* string

---

##### `termValue`<sup>Required</sup> <a name="termValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.termValue"></a>

```typescript
public readonly termValue: string;
```

- *Type:* string

---

##### `termValueUom`<sup>Required</sup> <a name="termValueUom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.termValueUom"></a>

```typescript
public readonly termValueUom: string;
```

- *Type:* string

---

##### `timeAgreementEnd`<sup>Required</sup> <a name="timeAgreementEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeAgreementEnd"></a>

```typescript
public readonly timeAgreementEnd: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeCustomerConfig`<sup>Required</sup> <a name="timeCustomerConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeCustomerConfig"></a>

```typescript
public readonly timeCustomerConfig: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeMajorsetEnd`<sup>Required</sup> <a name="timeMajorsetEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeMajorsetEnd"></a>

```typescript
public readonly timeMajorsetEnd: string;
```

- *Type:* string

---

##### `timeMajorsetStart`<sup>Required</sup> <a name="timeMajorsetStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeMajorsetStart"></a>

```typescript
public readonly timeMajorsetStart: string;
```

- *Type:* string

---

##### `timePaymentExpiry`<sup>Required</sup> <a name="timePaymentExpiry" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timePaymentExpiry"></a>

```typescript
public readonly timePaymentExpiry: string;
```

- *Type:* string

---

##### `timeProvisioned`<sup>Required</sup> <a name="timeProvisioned" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeProvisioned"></a>

```typescript
public readonly timeProvisioned: string;
```

- *Type:* string

---

##### `timeServiceConfigurationEmailSent`<sup>Required</sup> <a name="timeServiceConfigurationEmailSent" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeServiceConfigurationEmailSent"></a>

```typescript
public readonly timeServiceConfigurationEmailSent: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `timeWelcomeEmailSent`<sup>Required</sup> <a name="timeWelcomeEmailSent" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeWelcomeEmailSent"></a>

```typescript
public readonly timeWelcomeEmailSent: string;
```

- *Type:* string

---

##### `totalValue`<sup>Required</sup> <a name="totalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.totalValue"></a>

```typescript
public readonly totalValue: string;
```

- *Type:* string

---

##### `transactionExtensionId`<sup>Required</sup> <a name="transactionExtensionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.transactionExtensionId"></a>

```typescript
public readonly transactionExtensionId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `usedAmount`<sup>Required</sup> <a name="usedAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.usedAmount"></a>

```typescript
public readonly usedAmount: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `subscribedServiceIdInput`<sup>Optional</sup> <a name="subscribedServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscribedServiceIdInput"></a>

```typescript
public readonly subscribedServiceIdInput: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subscribedServiceId`<sup>Required</sup> <a name="subscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscribedServiceId"></a>

```typescript
public readonly subscribedServiceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionSubscribedServiceBillToAddress <a name="DataOciOnesubscriptionSubscribedServiceBillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddress.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceBillToAddress: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddress = { ... }
```


### DataOciOnesubscriptionSubscribedServiceBillToAddressLocation <a name="DataOciOnesubscriptionSubscribedServiceBillToAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocation.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceBillToAddressLocation: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocation = { ... }
```


### DataOciOnesubscriptionSubscribedServiceBillToContact <a name="DataOciOnesubscriptionSubscribedServiceBillToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContact.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceBillToContact: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContact = { ... }
```


### DataOciOnesubscriptionSubscribedServiceBillToCustomer <a name="DataOciOnesubscriptionSubscribedServiceBillToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomer.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceBillToCustomer: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomer = { ... }
```


### DataOciOnesubscriptionSubscribedServiceCommitmentServices <a name="DataOciOnesubscriptionSubscribedServiceCommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServices.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceCommitmentServices: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServices = { ... }
```


### DataOciOnesubscriptionSubscribedServiceConfig <a name="DataOciOnesubscriptionSubscribedServiceConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceConfig: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.subscribedServiceId">subscribedServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#subscribed_service_id DataOciOnesubscriptionSubscribedService#subscribed_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.fields">fields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#fields DataOciOnesubscriptionSubscribedService#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#id DataOciOnesubscriptionSubscribedService#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `subscribedServiceId`<sup>Required</sup> <a name="subscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.subscribedServiceId"></a>

```typescript
public readonly subscribedServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#subscribed_service_id DataOciOnesubscriptionSubscribedService#subscribed_service_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#fields DataOciOnesubscriptionSubscribedService#fields}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#id DataOciOnesubscriptionSubscribedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOnesubscriptionSubscribedServiceEndUserAddress <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddress.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceEndUserAddress: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddress = { ... }
```


### DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceEndUserAddressLocation: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation = { ... }
```


### DataOciOnesubscriptionSubscribedServiceEndUserContact <a name="DataOciOnesubscriptionSubscribedServiceEndUserContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContact.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceEndUserContact: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContact = { ... }
```


### DataOciOnesubscriptionSubscribedServiceEndUserCustomer <a name="DataOciOnesubscriptionSubscribedServiceEndUserCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomer.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceEndUserCustomer: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomer = { ... }
```


### DataOciOnesubscriptionSubscribedServicePaymentTerm <a name="DataOciOnesubscriptionSubscribedServicePaymentTerm" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTerm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTerm.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicePaymentTerm: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTerm = { ... }
```


### DataOciOnesubscriptionSubscribedServiceProduct <a name="DataOciOnesubscriptionSubscribedServiceProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProduct.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceProduct: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProduct = { ... }
```


### DataOciOnesubscriptionSubscribedServiceRateCards <a name="DataOciOnesubscriptionSubscribedServiceRateCards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCards"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCards.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceRateCards: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCards = { ... }
```


### DataOciOnesubscriptionSubscribedServiceRateCardsCurrency <a name="DataOciOnesubscriptionSubscribedServiceRateCardsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrency.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceRateCardsCurrency: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrency = { ... }
```


### DataOciOnesubscriptionSubscribedServiceRateCardsProduct <a name="DataOciOnesubscriptionSubscribedServiceRateCardsProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProduct.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceRateCardsProduct: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProduct = { ... }
```


### DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers <a name="DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers = { ... }
```


### DataOciOnesubscriptionSubscribedServiceResellerAddress <a name="DataOciOnesubscriptionSubscribedServiceResellerAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddress.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceResellerAddress: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddress = { ... }
```


### DataOciOnesubscriptionSubscribedServiceResellerAddressLocation <a name="DataOciOnesubscriptionSubscribedServiceResellerAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocation.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceResellerAddressLocation: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocation = { ... }
```


### DataOciOnesubscriptionSubscribedServiceResellerContact <a name="DataOciOnesubscriptionSubscribedServiceResellerContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContact.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceResellerContact: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContact = { ... }
```


### DataOciOnesubscriptionSubscribedServiceResellerCustomer <a name="DataOciOnesubscriptionSubscribedServiceResellerCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomer.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceResellerCustomer: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomer = { ... }
```


### DataOciOnesubscriptionSubscribedServiceServiceToAddress <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddress.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceServiceToAddress: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddress = { ... }
```


### DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceServiceToAddressLocation: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation = { ... }
```


### DataOciOnesubscriptionSubscribedServiceServiceToContact <a name="DataOciOnesubscriptionSubscribedServiceServiceToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContact.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceServiceToContact: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContact = { ... }
```


### DataOciOnesubscriptionSubscribedServiceServiceToCustomer <a name="DataOciOnesubscriptionSubscribedServiceServiceToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomer.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceServiceToCustomer: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomer = { ... }
```


### DataOciOnesubscriptionSubscribedServiceSoldToContact <a name="DataOciOnesubscriptionSubscribedServiceSoldToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContact.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceSoldToContact: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContact = { ... }
```


### DataOciOnesubscriptionSubscribedServiceSoldToCustomer <a name="DataOciOnesubscriptionSubscribedServiceSoldToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomer.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServiceSoldToCustomer: dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomer = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionSubscribedServiceBillToAddressList <a name="DataOciOnesubscriptionSubscribedServiceBillToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList <a name="DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.address1">address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.address2">address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.tcaLocationId">tcaLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocation">DataOciOnesubscriptionSubscribedServiceBillToAddressLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tcaLocationId`<sup>Required</sup> <a name="tcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.tcaLocationId"></a>

```typescript
public readonly tcaLocationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceBillToAddressLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocation">DataOciOnesubscriptionSubscribedServiceBillToAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.billSiteUseId">billSiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.isBillTo">isBillTo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.isShipTo">isShipTo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList">DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.phone">phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.service2SiteUseId">service2SiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.tcaCustAcctSiteId">tcaCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.tcaPartySiteNumber">tcaPartySiteNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddress">DataOciOnesubscriptionSubscribedServiceBillToAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billSiteUseId`<sup>Required</sup> <a name="billSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.billSiteUseId"></a>

```typescript
public readonly billSiteUseId: string;
```

- *Type:* string

---

##### `isBillTo`<sup>Required</sup> <a name="isBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.isBillTo"></a>

```typescript
public readonly isBillTo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isShipTo`<sup>Required</sup> <a name="isShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.isShipTo"></a>

```typescript
public readonly isShipTo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.location"></a>

```typescript
public readonly location: DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList">DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

---

##### `service2SiteUseId`<sup>Required</sup> <a name="service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.service2SiteUseId"></a>

```typescript
public readonly service2SiteUseId: string;
```

- *Type:* string

---

##### `tcaCustAcctSiteId`<sup>Required</sup> <a name="tcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.tcaCustAcctSiteId"></a>

```typescript
public readonly tcaCustAcctSiteId: string;
```

- *Type:* string

---

##### `tcaPartySiteNumber`<sup>Required</sup> <a name="tcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.tcaPartySiteNumber"></a>

```typescript
public readonly tcaPartySiteNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceBillToAddress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddress">DataOciOnesubscriptionSubscribedServiceBillToAddress</a>

---


### DataOciOnesubscriptionSubscribedServiceBillToContactList <a name="DataOciOnesubscriptionSubscribedServiceBillToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaContactId">tcaContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaCustAccntSiteId">tcaCustAccntSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContact">DataOciOnesubscriptionSubscribedServiceBillToContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tcaContactId`<sup>Required</sup> <a name="tcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaContactId"></a>

```typescript
public readonly tcaContactId: string;
```

- *Type:* string

---

##### `tcaCustAccntSiteId`<sup>Required</sup> <a name="tcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaCustAccntSiteId"></a>

```typescript
public readonly tcaCustAccntSiteId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceBillToContact;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContact">DataOciOnesubscriptionSubscribedServiceBillToContact</a>

---


### DataOciOnesubscriptionSubscribedServiceBillToCustomerList <a name="DataOciOnesubscriptionSubscribedServiceBillToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.customerChainType">customerChainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.isChainCustomer">isChainCustomer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.isPublicSector">isPublicSector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.namePhonetic">namePhonetic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaCustAccountNumber">tcaCustAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaCustomerAccountId">tcaCustomerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaPartyNumber">tcaPartyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomer">DataOciOnesubscriptionSubscribedServiceBillToCustomer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerChainType`<sup>Required</sup> <a name="customerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.customerChainType"></a>

```typescript
public readonly customerChainType: string;
```

- *Type:* string

---

##### `isChainCustomer`<sup>Required</sup> <a name="isChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.isChainCustomer"></a>

```typescript
public readonly isChainCustomer: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPublicSector`<sup>Required</sup> <a name="isPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.isPublicSector"></a>

```typescript
public readonly isPublicSector: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePhonetic`<sup>Required</sup> <a name="namePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.namePhonetic"></a>

```typescript
public readonly namePhonetic: string;
```

- *Type:* string

---

##### `tcaCustAccountNumber`<sup>Required</sup> <a name="tcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```typescript
public readonly tcaCustAccountNumber: string;
```

- *Type:* string

---

##### `tcaCustomerAccountId`<sup>Required</sup> <a name="tcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```typescript
public readonly tcaCustomerAccountId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `tcaPartyNumber`<sup>Required</sup> <a name="tcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaPartyNumber"></a>

```typescript
public readonly tcaPartyNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceBillToCustomer;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomer">DataOciOnesubscriptionSubscribedServiceBillToCustomer</a>

---


### DataOciOnesubscriptionSubscribedServiceCommitmentServicesList <a name="DataOciOnesubscriptionSubscribedServiceCommitmentServicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference <a name="DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.availableAmount">availableAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.fundedAllocationValue">fundedAllocationValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.lineNetAmount">lineNetAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.quantity">quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServices">DataOciOnesubscriptionSubscribedServiceCommitmentServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableAmount`<sup>Required</sup> <a name="availableAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.availableAmount"></a>

```typescript
public readonly availableAmount: string;
```

- *Type:* string

---

##### `fundedAllocationValue`<sup>Required</sup> <a name="fundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.fundedAllocationValue"></a>

```typescript
public readonly fundedAllocationValue: string;
```

- *Type:* string

---

##### `lineNetAmount`<sup>Required</sup> <a name="lineNetAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.lineNetAmount"></a>

```typescript
public readonly lineNetAmount: string;
```

- *Type:* string

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.quantity"></a>

```typescript
public readonly quantity: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceCommitmentServices;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServices">DataOciOnesubscriptionSubscribedServiceCommitmentServices</a>

---


### DataOciOnesubscriptionSubscribedServiceEndUserAddressList <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.address1">address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.address2">address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.tcaLocationId">tcaLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation">DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tcaLocationId`<sup>Required</sup> <a name="tcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.tcaLocationId"></a>

```typescript
public readonly tcaLocationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation">DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.billSiteUseId">billSiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.isBillTo">isBillTo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.isShipTo">isShipTo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList">DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.phone">phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.service2SiteUseId">service2SiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.tcaCustAcctSiteId">tcaCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.tcaPartySiteNumber">tcaPartySiteNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddress">DataOciOnesubscriptionSubscribedServiceEndUserAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billSiteUseId`<sup>Required</sup> <a name="billSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.billSiteUseId"></a>

```typescript
public readonly billSiteUseId: string;
```

- *Type:* string

---

##### `isBillTo`<sup>Required</sup> <a name="isBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.isBillTo"></a>

```typescript
public readonly isBillTo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isShipTo`<sup>Required</sup> <a name="isShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.isShipTo"></a>

```typescript
public readonly isShipTo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.location"></a>

```typescript
public readonly location: DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList">DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

---

##### `service2SiteUseId`<sup>Required</sup> <a name="service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.service2SiteUseId"></a>

```typescript
public readonly service2SiteUseId: string;
```

- *Type:* string

---

##### `tcaCustAcctSiteId`<sup>Required</sup> <a name="tcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.tcaCustAcctSiteId"></a>

```typescript
public readonly tcaCustAcctSiteId: string;
```

- *Type:* string

---

##### `tcaPartySiteNumber`<sup>Required</sup> <a name="tcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.tcaPartySiteNumber"></a>

```typescript
public readonly tcaPartySiteNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceEndUserAddress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddress">DataOciOnesubscriptionSubscribedServiceEndUserAddress</a>

---


### DataOciOnesubscriptionSubscribedServiceEndUserContactList <a name="DataOciOnesubscriptionSubscribedServiceEndUserContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference <a name="DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaContactId">tcaContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaCustAccntSiteId">tcaCustAccntSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContact">DataOciOnesubscriptionSubscribedServiceEndUserContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tcaContactId`<sup>Required</sup> <a name="tcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaContactId"></a>

```typescript
public readonly tcaContactId: string;
```

- *Type:* string

---

##### `tcaCustAccntSiteId`<sup>Required</sup> <a name="tcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaCustAccntSiteId"></a>

```typescript
public readonly tcaCustAccntSiteId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceEndUserContact;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContact">DataOciOnesubscriptionSubscribedServiceEndUserContact</a>

---


### DataOciOnesubscriptionSubscribedServiceEndUserCustomerList <a name="DataOciOnesubscriptionSubscribedServiceEndUserCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.customerChainType">customerChainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.isChainCustomer">isChainCustomer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.isPublicSector">isPublicSector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.namePhonetic">namePhonetic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaCustAccountNumber">tcaCustAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaCustomerAccountId">tcaCustomerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaPartyNumber">tcaPartyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomer">DataOciOnesubscriptionSubscribedServiceEndUserCustomer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerChainType`<sup>Required</sup> <a name="customerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.customerChainType"></a>

```typescript
public readonly customerChainType: string;
```

- *Type:* string

---

##### `isChainCustomer`<sup>Required</sup> <a name="isChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.isChainCustomer"></a>

```typescript
public readonly isChainCustomer: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPublicSector`<sup>Required</sup> <a name="isPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.isPublicSector"></a>

```typescript
public readonly isPublicSector: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePhonetic`<sup>Required</sup> <a name="namePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.namePhonetic"></a>

```typescript
public readonly namePhonetic: string;
```

- *Type:* string

---

##### `tcaCustAccountNumber`<sup>Required</sup> <a name="tcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaCustAccountNumber"></a>

```typescript
public readonly tcaCustAccountNumber: string;
```

- *Type:* string

---

##### `tcaCustomerAccountId`<sup>Required</sup> <a name="tcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaCustomerAccountId"></a>

```typescript
public readonly tcaCustomerAccountId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `tcaPartyNumber`<sup>Required</sup> <a name="tcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaPartyNumber"></a>

```typescript
public readonly tcaPartyNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceEndUserCustomer;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomer">DataOciOnesubscriptionSubscribedServiceEndUserCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicePaymentTermList <a name="DataOciOnesubscriptionSubscribedServicePaymentTermList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference <a name="DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.isActive">isActive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTerm">DataOciOnesubscriptionSubscribedServicePaymentTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.isActive"></a>

```typescript
public readonly isActive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicePaymentTerm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTerm">DataOciOnesubscriptionSubscribedServicePaymentTerm</a>

---


### DataOciOnesubscriptionSubscribedServiceProductList <a name="DataOciOnesubscriptionSubscribedServiceProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceProductOutputReference <a name="DataOciOnesubscriptionSubscribedServiceProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.productCategory">productCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProduct">DataOciOnesubscriptionSubscribedServiceProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.billingCategory"></a>

```typescript
public readonly billingCategory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.productCategory"></a>

```typescript
public readonly productCategory: string;
```

- *Type:* string

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.ucmRateCardPartType"></a>

```typescript
public readonly ucmRateCardPartType: string;
```

- *Type:* string

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.unitOfMeasure"></a>

```typescript
public readonly unitOfMeasure: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceProduct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProduct">DataOciOnesubscriptionSubscribedServiceProduct</a>

---


### DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList <a name="DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference <a name="DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.isoCode">isoCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.stdPrecision">stdPrecision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrency">DataOciOnesubscriptionSubscribedServiceRateCardsCurrency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isoCode`<sup>Required</sup> <a name="isoCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.isoCode"></a>

```typescript
public readonly isoCode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stdPrecision`<sup>Required</sup> <a name="stdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.stdPrecision"></a>

```typescript
public readonly stdPrecision: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceRateCardsCurrency;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrency">DataOciOnesubscriptionSubscribedServiceRateCardsCurrency</a>

---


### DataOciOnesubscriptionSubscribedServiceRateCardsList <a name="DataOciOnesubscriptionSubscribedServiceRateCardsList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference <a name="DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList">DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.discretionaryDiscountPercentage">discretionaryDiscountPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.isTier">isTier</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.overagePrice">overagePrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList">DataOciOnesubscriptionSubscribedServiceRateCardsProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.rateCardTiers">rateCardTiers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList">DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.subscribedServiceId">subscribedServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCards">DataOciOnesubscriptionSubscribedServiceRateCards</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.currency"></a>

```typescript
public readonly currency: DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList">DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList</a>

---

##### `discretionaryDiscountPercentage`<sup>Required</sup> <a name="discretionaryDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.discretionaryDiscountPercentage"></a>

```typescript
public readonly discretionaryDiscountPercentage: string;
```

- *Type:* string

---

##### `isTier`<sup>Required</sup> <a name="isTier" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.isTier"></a>

```typescript
public readonly isTier: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.netUnitPrice"></a>

```typescript
public readonly netUnitPrice: string;
```

- *Type:* string

---

##### `overagePrice`<sup>Required</sup> <a name="overagePrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.overagePrice"></a>

```typescript
public readonly overagePrice: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.product"></a>

```typescript
public readonly product: DataOciOnesubscriptionSubscribedServiceRateCardsProductList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList">DataOciOnesubscriptionSubscribedServiceRateCardsProductList</a>

---

##### `rateCardTiers`<sup>Required</sup> <a name="rateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.rateCardTiers"></a>

```typescript
public readonly rateCardTiers: DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList">DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList</a>

---

##### `subscribedServiceId`<sup>Required</sup> <a name="subscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.subscribedServiceId"></a>

```typescript
public readonly subscribedServiceId: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceRateCards;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCards">DataOciOnesubscriptionSubscribedServiceRateCards</a>

---


### DataOciOnesubscriptionSubscribedServiceRateCardsProductList <a name="DataOciOnesubscriptionSubscribedServiceRateCardsProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference <a name="DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.productCategory">productCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProduct">DataOciOnesubscriptionSubscribedServiceRateCardsProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.billingCategory"></a>

```typescript
public readonly billingCategory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.productCategory"></a>

```typescript
public readonly productCategory: string;
```

- *Type:* string

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.ucmRateCardPartType"></a>

```typescript
public readonly ucmRateCardPartType: string;
```

- *Type:* string

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.unitOfMeasure"></a>

```typescript
public readonly unitOfMeasure: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceRateCardsProduct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProduct">DataOciOnesubscriptionSubscribedServiceRateCardsProduct</a>

---


### DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList <a name="DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference <a name="DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.overagePrice">overagePrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.upToQuantity">upToQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers">DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.netUnitPrice"></a>

```typescript
public readonly netUnitPrice: string;
```

- *Type:* string

---

##### `overagePrice`<sup>Required</sup> <a name="overagePrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.overagePrice"></a>

```typescript
public readonly overagePrice: string;
```

- *Type:* string

---

##### `upToQuantity`<sup>Required</sup> <a name="upToQuantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.upToQuantity"></a>

```typescript
public readonly upToQuantity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers">DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers</a>

---


### DataOciOnesubscriptionSubscribedServiceResellerAddressList <a name="DataOciOnesubscriptionSubscribedServiceResellerAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList <a name="DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.address1">address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.address2">address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.tcaLocationId">tcaLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocation">DataOciOnesubscriptionSubscribedServiceResellerAddressLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tcaLocationId`<sup>Required</sup> <a name="tcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.tcaLocationId"></a>

```typescript
public readonly tcaLocationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceResellerAddressLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocation">DataOciOnesubscriptionSubscribedServiceResellerAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.billSiteUseId">billSiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.isBillTo">isBillTo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.isShipTo">isShipTo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList">DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.phone">phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.service2SiteUseId">service2SiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.tcaCustAcctSiteId">tcaCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.tcaPartySiteNumber">tcaPartySiteNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddress">DataOciOnesubscriptionSubscribedServiceResellerAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billSiteUseId`<sup>Required</sup> <a name="billSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.billSiteUseId"></a>

```typescript
public readonly billSiteUseId: string;
```

- *Type:* string

---

##### `isBillTo`<sup>Required</sup> <a name="isBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.isBillTo"></a>

```typescript
public readonly isBillTo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isShipTo`<sup>Required</sup> <a name="isShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.isShipTo"></a>

```typescript
public readonly isShipTo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.location"></a>

```typescript
public readonly location: DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList">DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

---

##### `service2SiteUseId`<sup>Required</sup> <a name="service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.service2SiteUseId"></a>

```typescript
public readonly service2SiteUseId: string;
```

- *Type:* string

---

##### `tcaCustAcctSiteId`<sup>Required</sup> <a name="tcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.tcaCustAcctSiteId"></a>

```typescript
public readonly tcaCustAcctSiteId: string;
```

- *Type:* string

---

##### `tcaPartySiteNumber`<sup>Required</sup> <a name="tcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.tcaPartySiteNumber"></a>

```typescript
public readonly tcaPartySiteNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceResellerAddress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddress">DataOciOnesubscriptionSubscribedServiceResellerAddress</a>

---


### DataOciOnesubscriptionSubscribedServiceResellerContactList <a name="DataOciOnesubscriptionSubscribedServiceResellerContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference <a name="DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaContactId">tcaContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaCustAccntSiteId">tcaCustAccntSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContact">DataOciOnesubscriptionSubscribedServiceResellerContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tcaContactId`<sup>Required</sup> <a name="tcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaContactId"></a>

```typescript
public readonly tcaContactId: string;
```

- *Type:* string

---

##### `tcaCustAccntSiteId`<sup>Required</sup> <a name="tcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaCustAccntSiteId"></a>

```typescript
public readonly tcaCustAccntSiteId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceResellerContact;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContact">DataOciOnesubscriptionSubscribedServiceResellerContact</a>

---


### DataOciOnesubscriptionSubscribedServiceResellerCustomerList <a name="DataOciOnesubscriptionSubscribedServiceResellerCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.customerChainType">customerChainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.isChainCustomer">isChainCustomer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.isPublicSector">isPublicSector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.namePhonetic">namePhonetic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaCustAccountNumber">tcaCustAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaCustomerAccountId">tcaCustomerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaPartyNumber">tcaPartyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomer">DataOciOnesubscriptionSubscribedServiceResellerCustomer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerChainType`<sup>Required</sup> <a name="customerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.customerChainType"></a>

```typescript
public readonly customerChainType: string;
```

- *Type:* string

---

##### `isChainCustomer`<sup>Required</sup> <a name="isChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.isChainCustomer"></a>

```typescript
public readonly isChainCustomer: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPublicSector`<sup>Required</sup> <a name="isPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.isPublicSector"></a>

```typescript
public readonly isPublicSector: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePhonetic`<sup>Required</sup> <a name="namePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.namePhonetic"></a>

```typescript
public readonly namePhonetic: string;
```

- *Type:* string

---

##### `tcaCustAccountNumber`<sup>Required</sup> <a name="tcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaCustAccountNumber"></a>

```typescript
public readonly tcaCustAccountNumber: string;
```

- *Type:* string

---

##### `tcaCustomerAccountId`<sup>Required</sup> <a name="tcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaCustomerAccountId"></a>

```typescript
public readonly tcaCustomerAccountId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `tcaPartyNumber`<sup>Required</sup> <a name="tcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaPartyNumber"></a>

```typescript
public readonly tcaPartyNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceResellerCustomer;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomer">DataOciOnesubscriptionSubscribedServiceResellerCustomer</a>

---


### DataOciOnesubscriptionSubscribedServiceServiceToAddressList <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.address1">address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.address2">address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.tcaLocationId">tcaLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation">DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tcaLocationId`<sup>Required</sup> <a name="tcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.tcaLocationId"></a>

```typescript
public readonly tcaLocationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation">DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.billSiteUseId">billSiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.isBillTo">isBillTo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.isShipTo">isShipTo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList">DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.phone">phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.service2SiteUseId">service2SiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.tcaCustAcctSiteId">tcaCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.tcaPartySiteNumber">tcaPartySiteNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddress">DataOciOnesubscriptionSubscribedServiceServiceToAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billSiteUseId`<sup>Required</sup> <a name="billSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.billSiteUseId"></a>

```typescript
public readonly billSiteUseId: string;
```

- *Type:* string

---

##### `isBillTo`<sup>Required</sup> <a name="isBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.isBillTo"></a>

```typescript
public readonly isBillTo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isShipTo`<sup>Required</sup> <a name="isShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.isShipTo"></a>

```typescript
public readonly isShipTo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.location"></a>

```typescript
public readonly location: DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList">DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

---

##### `service2SiteUseId`<sup>Required</sup> <a name="service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.service2SiteUseId"></a>

```typescript
public readonly service2SiteUseId: string;
```

- *Type:* string

---

##### `tcaCustAcctSiteId`<sup>Required</sup> <a name="tcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.tcaCustAcctSiteId"></a>

```typescript
public readonly tcaCustAcctSiteId: string;
```

- *Type:* string

---

##### `tcaPartySiteNumber`<sup>Required</sup> <a name="tcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.tcaPartySiteNumber"></a>

```typescript
public readonly tcaPartySiteNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceServiceToAddress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddress">DataOciOnesubscriptionSubscribedServiceServiceToAddress</a>

---


### DataOciOnesubscriptionSubscribedServiceServiceToContactList <a name="DataOciOnesubscriptionSubscribedServiceServiceToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaContactId">tcaContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaCustAccntSiteId">tcaCustAccntSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContact">DataOciOnesubscriptionSubscribedServiceServiceToContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tcaContactId`<sup>Required</sup> <a name="tcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaContactId"></a>

```typescript
public readonly tcaContactId: string;
```

- *Type:* string

---

##### `tcaCustAccntSiteId`<sup>Required</sup> <a name="tcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaCustAccntSiteId"></a>

```typescript
public readonly tcaCustAccntSiteId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceServiceToContact;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContact">DataOciOnesubscriptionSubscribedServiceServiceToContact</a>

---


### DataOciOnesubscriptionSubscribedServiceServiceToCustomerList <a name="DataOciOnesubscriptionSubscribedServiceServiceToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.customerChainType">customerChainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.isChainCustomer">isChainCustomer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.isPublicSector">isPublicSector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.namePhonetic">namePhonetic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaCustAccountNumber">tcaCustAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaCustomerAccountId">tcaCustomerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaPartyNumber">tcaPartyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomer">DataOciOnesubscriptionSubscribedServiceServiceToCustomer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerChainType`<sup>Required</sup> <a name="customerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.customerChainType"></a>

```typescript
public readonly customerChainType: string;
```

- *Type:* string

---

##### `isChainCustomer`<sup>Required</sup> <a name="isChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.isChainCustomer"></a>

```typescript
public readonly isChainCustomer: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPublicSector`<sup>Required</sup> <a name="isPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.isPublicSector"></a>

```typescript
public readonly isPublicSector: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePhonetic`<sup>Required</sup> <a name="namePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.namePhonetic"></a>

```typescript
public readonly namePhonetic: string;
```

- *Type:* string

---

##### `tcaCustAccountNumber`<sup>Required</sup> <a name="tcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```typescript
public readonly tcaCustAccountNumber: string;
```

- *Type:* string

---

##### `tcaCustomerAccountId`<sup>Required</sup> <a name="tcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```typescript
public readonly tcaCustomerAccountId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `tcaPartyNumber`<sup>Required</sup> <a name="tcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaPartyNumber"></a>

```typescript
public readonly tcaPartyNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceServiceToCustomer;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomer">DataOciOnesubscriptionSubscribedServiceServiceToCustomer</a>

---


### DataOciOnesubscriptionSubscribedServiceSoldToContactList <a name="DataOciOnesubscriptionSubscribedServiceSoldToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaContactId">tcaContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaCustAccntSiteId">tcaCustAccntSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContact">DataOciOnesubscriptionSubscribedServiceSoldToContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tcaContactId`<sup>Required</sup> <a name="tcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaContactId"></a>

```typescript
public readonly tcaContactId: string;
```

- *Type:* string

---

##### `tcaCustAccntSiteId`<sup>Required</sup> <a name="tcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaCustAccntSiteId"></a>

```typescript
public readonly tcaCustAccntSiteId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceSoldToContact;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContact">DataOciOnesubscriptionSubscribedServiceSoldToContact</a>

---


### DataOciOnesubscriptionSubscribedServiceSoldToCustomerList <a name="DataOciOnesubscriptionSubscribedServiceSoldToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedService } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.customerChainType">customerChainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.isChainCustomer">isChainCustomer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.isPublicSector">isPublicSector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.namePhonetic">namePhonetic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaCustAccountNumber">tcaCustAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaCustomerAccountId">tcaCustomerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaPartyNumber">tcaPartyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomer">DataOciOnesubscriptionSubscribedServiceSoldToCustomer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerChainType`<sup>Required</sup> <a name="customerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.customerChainType"></a>

```typescript
public readonly customerChainType: string;
```

- *Type:* string

---

##### `isChainCustomer`<sup>Required</sup> <a name="isChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.isChainCustomer"></a>

```typescript
public readonly isChainCustomer: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPublicSector`<sup>Required</sup> <a name="isPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.isPublicSector"></a>

```typescript
public readonly isPublicSector: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePhonetic`<sup>Required</sup> <a name="namePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.namePhonetic"></a>

```typescript
public readonly namePhonetic: string;
```

- *Type:* string

---

##### `tcaCustAccountNumber`<sup>Required</sup> <a name="tcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```typescript
public readonly tcaCustAccountNumber: string;
```

- *Type:* string

---

##### `tcaCustomerAccountId`<sup>Required</sup> <a name="tcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```typescript
public readonly tcaCustomerAccountId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `tcaPartyNumber`<sup>Required</sup> <a name="tcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaPartyNumber"></a>

```typescript
public readonly tcaPartyNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServiceSoldToCustomer;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomer">DataOciOnesubscriptionSubscribedServiceSoldToCustomer</a>

---



