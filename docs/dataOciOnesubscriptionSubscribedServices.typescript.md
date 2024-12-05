# `dataOciOnesubscriptionSubscribedServices` Submodule <a name="`dataOciOnesubscriptionSubscribedServices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionSubscribedServices <a name="DataOciOnesubscriptionSubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services oci_onesubscription_subscribed_services}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices(scope: Construct, id: string, config: DataOciOnesubscriptionSubscribedServicesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig">DataOciOnesubscriptionSubscribedServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig">DataOciOnesubscriptionSubscribedServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetOrderLineId">resetOrderLineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOnesubscriptionSubscribedServicesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrderLineId` <a name="resetOrderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetOrderLineId"></a>

```typescript
public resetOrderLineId(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionSubscribedServices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isConstruct"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformElement"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformDataSource"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOnesubscriptionSubscribedServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOnesubscriptionSubscribedServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOnesubscriptionSubscribedServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionSubscribedServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList">DataOciOnesubscriptionSubscribedServicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscribedServices">subscribedServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.orderLineIdInput">orderLineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.orderLineId">orderLineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.filter"></a>

```typescript
public readonly filter: DataOciOnesubscriptionSubscribedServicesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList">DataOciOnesubscriptionSubscribedServicesFilterList</a>

---

##### `subscribedServices`<sup>Required</sup> <a name="subscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscribedServices"></a>

```typescript
public readonly subscribedServices: DataOciOnesubscriptionSubscribedServicesSubscribedServicesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOnesubscriptionSubscribedServicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `orderLineIdInput`<sup>Optional</sup> <a name="orderLineIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.orderLineIdInput"></a>

```typescript
public readonly orderLineIdInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orderLineId`<sup>Required</sup> <a name="orderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.orderLineId"></a>

```typescript
public readonly orderLineId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionSubscribedServicesConfig <a name="DataOciOnesubscriptionSubscribedServicesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesConfig: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#compartment_id DataOciOnesubscriptionSubscribedServices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#subscription_id DataOciOnesubscriptionSubscribedServices#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#id DataOciOnesubscriptionSubscribedServices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.orderLineId">orderLineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#order_line_id DataOciOnesubscriptionSubscribedServices#order_line_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#status DataOciOnesubscriptionSubscribedServices#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#compartment_id DataOciOnesubscriptionSubscribedServices#compartment_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#subscription_id DataOciOnesubscriptionSubscribedServices#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOnesubscriptionSubscribedServicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#filter DataOciOnesubscriptionSubscribedServices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#id DataOciOnesubscriptionSubscribedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orderLineId`<sup>Optional</sup> <a name="orderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.orderLineId"></a>

```typescript
public readonly orderLineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#order_line_id DataOciOnesubscriptionSubscribedServices#order_line_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#status DataOciOnesubscriptionSubscribedServices#status}.

---

### DataOciOnesubscriptionSubscribedServicesFilter <a name="DataOciOnesubscriptionSubscribedServicesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesFilter: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#name DataOciOnesubscriptionSubscribedServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#values DataOciOnesubscriptionSubscribedServices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#regex DataOciOnesubscriptionSubscribedServices#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#name DataOciOnesubscriptionSubscribedServices#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#values DataOciOnesubscriptionSubscribedServices#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#regex DataOciOnesubscriptionSubscribedServices#regex}.

---

### DataOciOnesubscriptionSubscribedServicesSubscribedServices <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServices: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact = { ... }
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer: dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionSubscribedServicesFilterList <a name="DataOciOnesubscriptionSubscribedServicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOnesubscriptionSubscribedServicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>[]

---


### DataOciOnesubscriptionSubscribedServicesFilterOutputReference <a name="DataOciOnesubscriptionSubscribedServicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOnesubscriptionSubscribedServicesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.address1">address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.address2">address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.tcaLocationId">tcaLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tcaLocationId`<sup>Required</sup> <a name="tcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.tcaLocationId"></a>

```typescript
public readonly tcaLocationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.billSiteUseId">billSiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.isBillTo">isBillTo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.isShipTo">isShipTo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.phone">phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.service2SiteUseId">service2SiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.tcaCustAcctSiteId">tcaCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.tcaPartySiteNumber">tcaPartySiteNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billSiteUseId`<sup>Required</sup> <a name="billSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.billSiteUseId"></a>

```typescript
public readonly billSiteUseId: string;
```

- *Type:* string

---

##### `isBillTo`<sup>Required</sup> <a name="isBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.isBillTo"></a>

```typescript
public readonly isBillTo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isShipTo`<sup>Required</sup> <a name="isShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.isShipTo"></a>

```typescript
public readonly isShipTo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.location"></a>

```typescript
public readonly location: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

---

##### `service2SiteUseId`<sup>Required</sup> <a name="service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.service2SiteUseId"></a>

```typescript
public readonly service2SiteUseId: string;
```

- *Type:* string

---

##### `tcaCustAcctSiteId`<sup>Required</sup> <a name="tcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.tcaCustAcctSiteId"></a>

```typescript
public readonly tcaCustAcctSiteId: string;
```

- *Type:* string

---

##### `tcaPartySiteNumber`<sup>Required</sup> <a name="tcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.tcaPartySiteNumber"></a>

```typescript
public readonly tcaPartySiteNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaContactId">tcaContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaCustAccntSiteId">tcaCustAccntSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tcaContactId`<sup>Required</sup> <a name="tcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaContactId"></a>

```typescript
public readonly tcaContactId: string;
```

- *Type:* string

---

##### `tcaCustAccntSiteId`<sup>Required</sup> <a name="tcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaCustAccntSiteId"></a>

```typescript
public readonly tcaCustAccntSiteId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.customerChainType">customerChainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.isChainCustomer">isChainCustomer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.isPublicSector">isPublicSector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.namePhonetic">namePhonetic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaCustAccountNumber">tcaCustAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaCustomerAccountId">tcaCustomerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaPartyNumber">tcaPartyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerChainType`<sup>Required</sup> <a name="customerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.customerChainType"></a>

```typescript
public readonly customerChainType: string;
```

- *Type:* string

---

##### `isChainCustomer`<sup>Required</sup> <a name="isChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.isChainCustomer"></a>

```typescript
public readonly isChainCustomer: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPublicSector`<sup>Required</sup> <a name="isPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.isPublicSector"></a>

```typescript
public readonly isPublicSector: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePhonetic`<sup>Required</sup> <a name="namePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.namePhonetic"></a>

```typescript
public readonly namePhonetic: string;
```

- *Type:* string

---

##### `tcaCustAccountNumber`<sup>Required</sup> <a name="tcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```typescript
public readonly tcaCustAccountNumber: string;
```

- *Type:* string

---

##### `tcaCustomerAccountId`<sup>Required</sup> <a name="tcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```typescript
public readonly tcaCustomerAccountId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `tcaPartyNumber`<sup>Required</sup> <a name="tcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaPartyNumber"></a>

```typescript
public readonly tcaPartyNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.availableAmount">availableAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue">fundedAllocationValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount">lineNetAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.quantity">quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices">DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableAmount`<sup>Required</sup> <a name="availableAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.availableAmount"></a>

```typescript
public readonly availableAmount: string;
```

- *Type:* string

---

##### `fundedAllocationValue`<sup>Required</sup> <a name="fundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue"></a>

```typescript
public readonly fundedAllocationValue: string;
```

- *Type:* string

---

##### `lineNetAmount`<sup>Required</sup> <a name="lineNetAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount"></a>

```typescript
public readonly lineNetAmount: string;
```

- *Type:* string

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.quantity"></a>

```typescript
public readonly quantity: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices">DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.address1">address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.address2">address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.tcaLocationId">tcaLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tcaLocationId`<sup>Required</sup> <a name="tcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.tcaLocationId"></a>

```typescript
public readonly tcaLocationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.billSiteUseId">billSiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.isBillTo">isBillTo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.isShipTo">isShipTo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.phone">phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.service2SiteUseId">service2SiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.tcaCustAcctSiteId">tcaCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.tcaPartySiteNumber">tcaPartySiteNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billSiteUseId`<sup>Required</sup> <a name="billSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.billSiteUseId"></a>

```typescript
public readonly billSiteUseId: string;
```

- *Type:* string

---

##### `isBillTo`<sup>Required</sup> <a name="isBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.isBillTo"></a>

```typescript
public readonly isBillTo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isShipTo`<sup>Required</sup> <a name="isShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.isShipTo"></a>

```typescript
public readonly isShipTo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.location"></a>

```typescript
public readonly location: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

---

##### `service2SiteUseId`<sup>Required</sup> <a name="service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.service2SiteUseId"></a>

```typescript
public readonly service2SiteUseId: string;
```

- *Type:* string

---

##### `tcaCustAcctSiteId`<sup>Required</sup> <a name="tcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.tcaCustAcctSiteId"></a>

```typescript
public readonly tcaCustAcctSiteId: string;
```

- *Type:* string

---

##### `tcaPartySiteNumber`<sup>Required</sup> <a name="tcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.tcaPartySiteNumber"></a>

```typescript
public readonly tcaPartySiteNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaContactId">tcaContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaCustAccntSiteId">tcaCustAccntSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tcaContactId`<sup>Required</sup> <a name="tcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaContactId"></a>

```typescript
public readonly tcaContactId: string;
```

- *Type:* string

---

##### `tcaCustAccntSiteId`<sup>Required</sup> <a name="tcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaCustAccntSiteId"></a>

```typescript
public readonly tcaCustAccntSiteId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.customerChainType">customerChainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.isChainCustomer">isChainCustomer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.isPublicSector">isPublicSector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.namePhonetic">namePhonetic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaCustAccountNumber">tcaCustAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaCustomerAccountId">tcaCustomerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaPartyNumber">tcaPartyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerChainType`<sup>Required</sup> <a name="customerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.customerChainType"></a>

```typescript
public readonly customerChainType: string;
```

- *Type:* string

---

##### `isChainCustomer`<sup>Required</sup> <a name="isChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.isChainCustomer"></a>

```typescript
public readonly isChainCustomer: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPublicSector`<sup>Required</sup> <a name="isPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.isPublicSector"></a>

```typescript
public readonly isPublicSector: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePhonetic`<sup>Required</sup> <a name="namePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.namePhonetic"></a>

```typescript
public readonly namePhonetic: string;
```

- *Type:* string

---

##### `tcaCustAccountNumber`<sup>Required</sup> <a name="tcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaCustAccountNumber"></a>

```typescript
public readonly tcaCustAccountNumber: string;
```

- *Type:* string

---

##### `tcaCustomerAccountId`<sup>Required</sup> <a name="tcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaCustomerAccountId"></a>

```typescript
public readonly tcaCustomerAccountId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `tcaPartyNumber`<sup>Required</sup> <a name="tcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaPartyNumber"></a>

```typescript
public readonly tcaPartyNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.adminEmail">adminEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementId">agreementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementName">agreementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementType">agreementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.availableAmount">availableAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billingFrequency">billingFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToAddress">billToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToContact">billToContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToCustomer">billToCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.bookingOptyNumber">bookingOptyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.buyerEmail">buyerEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.commitmentScheduleId">commitmentScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.commitmentServices">commitmentServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.creditPercentage">creditPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.csi">csi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.customerTransactionReference">customerTransactionReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.dataCenter">dataCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.dataCenterRegion">dataCenterRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.eligibleToRenew">eligibleToRenew</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserAddress">endUserAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserContact">endUserContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserCustomer">endUserCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fulfillmentSet">fulfillmentSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fundedAllocationValue">fundedAllocationValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isAllowance">isAllowance</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isCapToPriceList">isCapToPriceList</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isCreditEnabled">isCreditEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isHavingUsage">isHavingUsage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isIntentToPay">isIntentToPay</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isPayg">isPayg</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isSingleRateCard">isSingleRateCard</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isVariableCommitment">isVariableCommitment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.lineNetAmount">lineNetAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.majorSet">majorSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.operationType">operationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderHeaderId">orderHeaderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderLineId">orderLineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderLineNumber">orderLineNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderNumber">orderNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderType">orderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.originalPromoAmount">originalPromoAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overageBillTo">overageBillTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overageDiscountPercentage">overageDiscountPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overagePolicy">overagePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.partnerCreditAmount">partnerCreditAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.partnerTransactionType">partnerTransactionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paygPolicy">paygPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentMethod">paymentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentNumber">paymentNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentTerm">paymentTerm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.pricePeriod">pricePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.pricingModel">pricingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.programType">programType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promoOrderLineId">promoOrderLineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promotionPricingType">promotionPricingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promoType">promoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.provisioningSource">provisioningSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.quantity">quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.rateCardDiscountPercentage">rateCardDiscountPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.rateCards">rateCards</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.ratecardType">ratecardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyId">renewalOptyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyNumber">renewalOptyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyType">renewalOptyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewedSubscribedServiceId">renewedSubscribedServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerAddress">resellerAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerContact">resellerContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerCustomer">resellerCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revenueLineId">revenueLineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revenueLineNumber">revenueLineNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revisedArrInLc">revisedArrInLc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revisedArrInSc">revisedArrInSc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.salesAccountPartyId">salesAccountPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.salesChannel">salesChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToAddress">serviceToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToContact">serviceToContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToCustomer">serviceToCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.soldToContact">soldToContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.soldToCustomer">soldToCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.startDateType">startDateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.subscriptionSource">subscriptionSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemArrInLc">systemArrInLc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemArrInSc">systemArrInSc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemAtrArrInLc">systemAtrArrInLc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemAtrArrInSc">systemAtrArrInSc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.termValue">termValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.termValueUom">termValueUom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeAgreementEnd">timeAgreementEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeCustomerConfig">timeCustomerConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeMajorsetEnd">timeMajorsetEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeMajorsetStart">timeMajorsetStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timePaymentExpiry">timePaymentExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeProvisioned">timeProvisioned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeServiceConfigurationEmailSent">timeServiceConfigurationEmailSent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeWelcomeEmailSent">timeWelcomeEmailSent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.totalValue">totalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.transactionExtensionId">transactionExtensionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.usedAmount">usedAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices">DataOciOnesubscriptionSubscribedServicesSubscribedServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminEmail`<sup>Required</sup> <a name="adminEmail" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.adminEmail"></a>

```typescript
public readonly adminEmail: string;
```

- *Type:* string

---

##### `agreementId`<sup>Required</sup> <a name="agreementId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementId"></a>

```typescript
public readonly agreementId: string;
```

- *Type:* string

---

##### `agreementName`<sup>Required</sup> <a name="agreementName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementName"></a>

```typescript
public readonly agreementName: string;
```

- *Type:* string

---

##### `agreementType`<sup>Required</sup> <a name="agreementType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementType"></a>

```typescript
public readonly agreementType: string;
```

- *Type:* string

---

##### `availableAmount`<sup>Required</sup> <a name="availableAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.availableAmount"></a>

```typescript
public readonly availableAmount: string;
```

- *Type:* string

---

##### `billingFrequency`<sup>Required</sup> <a name="billingFrequency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billingFrequency"></a>

```typescript
public readonly billingFrequency: string;
```

- *Type:* string

---

##### `billToAddress`<sup>Required</sup> <a name="billToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToAddress"></a>

```typescript
public readonly billToAddress: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList</a>

---

##### `billToContact`<sup>Required</sup> <a name="billToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToContact"></a>

```typescript
public readonly billToContact: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList</a>

---

##### `billToCustomer`<sup>Required</sup> <a name="billToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToCustomer"></a>

```typescript
public readonly billToCustomer: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList</a>

---

##### `bookingOptyNumber`<sup>Required</sup> <a name="bookingOptyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.bookingOptyNumber"></a>

```typescript
public readonly bookingOptyNumber: string;
```

- *Type:* string

---

##### `buyerEmail`<sup>Required</sup> <a name="buyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.buyerEmail"></a>

```typescript
public readonly buyerEmail: string;
```

- *Type:* string

---

##### `commitmentScheduleId`<sup>Required</sup> <a name="commitmentScheduleId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.commitmentScheduleId"></a>

```typescript
public readonly commitmentScheduleId: string;
```

- *Type:* string

---

##### `commitmentServices`<sup>Required</sup> <a name="commitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.commitmentServices"></a>

```typescript
public readonly commitmentServices: DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `creditPercentage`<sup>Required</sup> <a name="creditPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.creditPercentage"></a>

```typescript
public readonly creditPercentage: string;
```

- *Type:* string

---

##### `csi`<sup>Required</sup> <a name="csi" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.csi"></a>

```typescript
public readonly csi: string;
```

- *Type:* string

---

##### `customerTransactionReference`<sup>Required</sup> <a name="customerTransactionReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.customerTransactionReference"></a>

```typescript
public readonly customerTransactionReference: string;
```

- *Type:* string

---

##### `dataCenter`<sup>Required</sup> <a name="dataCenter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.dataCenter"></a>

```typescript
public readonly dataCenter: string;
```

- *Type:* string

---

##### `dataCenterRegion`<sup>Required</sup> <a name="dataCenterRegion" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.dataCenterRegion"></a>

```typescript
public readonly dataCenterRegion: string;
```

- *Type:* string

---

##### `eligibleToRenew`<sup>Required</sup> <a name="eligibleToRenew" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.eligibleToRenew"></a>

```typescript
public readonly eligibleToRenew: string;
```

- *Type:* string

---

##### `endUserAddress`<sup>Required</sup> <a name="endUserAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserAddress"></a>

```typescript
public readonly endUserAddress: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList</a>

---

##### `endUserContact`<sup>Required</sup> <a name="endUserContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserContact"></a>

```typescript
public readonly endUserContact: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList</a>

---

##### `endUserCustomer`<sup>Required</sup> <a name="endUserCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserCustomer"></a>

```typescript
public readonly endUserCustomer: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList</a>

---

##### `fulfillmentSet`<sup>Required</sup> <a name="fulfillmentSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fulfillmentSet"></a>

```typescript
public readonly fulfillmentSet: string;
```

- *Type:* string

---

##### `fundedAllocationValue`<sup>Required</sup> <a name="fundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fundedAllocationValue"></a>

```typescript
public readonly fundedAllocationValue: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAllowance`<sup>Required</sup> <a name="isAllowance" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isAllowance"></a>

```typescript
public readonly isAllowance: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isCapToPriceList`<sup>Required</sup> <a name="isCapToPriceList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isCapToPriceList"></a>

```typescript
public readonly isCapToPriceList: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isCreditEnabled`<sup>Required</sup> <a name="isCreditEnabled" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isCreditEnabled"></a>

```typescript
public readonly isCreditEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHavingUsage`<sup>Required</sup> <a name="isHavingUsage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isHavingUsage"></a>

```typescript
public readonly isHavingUsage: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isIntentToPay`<sup>Required</sup> <a name="isIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isIntentToPay"></a>

```typescript
public readonly isIntentToPay: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPayg`<sup>Required</sup> <a name="isPayg" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isPayg"></a>

```typescript
public readonly isPayg: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSingleRateCard`<sup>Required</sup> <a name="isSingleRateCard" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isSingleRateCard"></a>

```typescript
public readonly isSingleRateCard: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isVariableCommitment`<sup>Required</sup> <a name="isVariableCommitment" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isVariableCommitment"></a>

```typescript
public readonly isVariableCommitment: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lineNetAmount`<sup>Required</sup> <a name="lineNetAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.lineNetAmount"></a>

```typescript
public readonly lineNetAmount: string;
```

- *Type:* string

---

##### `majorSet`<sup>Required</sup> <a name="majorSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.majorSet"></a>

```typescript
public readonly majorSet: string;
```

- *Type:* string

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.netUnitPrice"></a>

```typescript
public readonly netUnitPrice: string;
```

- *Type:* string

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.operationType"></a>

```typescript
public readonly operationType: string;
```

- *Type:* string

---

##### `orderHeaderId`<sup>Required</sup> <a name="orderHeaderId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderHeaderId"></a>

```typescript
public readonly orderHeaderId: string;
```

- *Type:* string

---

##### `orderLineId`<sup>Required</sup> <a name="orderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderLineId"></a>

```typescript
public readonly orderLineId: string;
```

- *Type:* string

---

##### `orderLineNumber`<sup>Required</sup> <a name="orderLineNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderLineNumber"></a>

```typescript
public readonly orderLineNumber: number;
```

- *Type:* number

---

##### `orderNumber`<sup>Required</sup> <a name="orderNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderNumber"></a>

```typescript
public readonly orderNumber: string;
```

- *Type:* string

---

##### `orderType`<sup>Required</sup> <a name="orderType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderType"></a>

```typescript
public readonly orderType: string;
```

- *Type:* string

---

##### `originalPromoAmount`<sup>Required</sup> <a name="originalPromoAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.originalPromoAmount"></a>

```typescript
public readonly originalPromoAmount: string;
```

- *Type:* string

---

##### `overageBillTo`<sup>Required</sup> <a name="overageBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overageBillTo"></a>

```typescript
public readonly overageBillTo: string;
```

- *Type:* string

---

##### `overageDiscountPercentage`<sup>Required</sup> <a name="overageDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overageDiscountPercentage"></a>

```typescript
public readonly overageDiscountPercentage: string;
```

- *Type:* string

---

##### `overagePolicy`<sup>Required</sup> <a name="overagePolicy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overagePolicy"></a>

```typescript
public readonly overagePolicy: string;
```

- *Type:* string

---

##### `partnerCreditAmount`<sup>Required</sup> <a name="partnerCreditAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.partnerCreditAmount"></a>

```typescript
public readonly partnerCreditAmount: string;
```

- *Type:* string

---

##### `partnerTransactionType`<sup>Required</sup> <a name="partnerTransactionType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.partnerTransactionType"></a>

```typescript
public readonly partnerTransactionType: string;
```

- *Type:* string

---

##### `paygPolicy`<sup>Required</sup> <a name="paygPolicy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paygPolicy"></a>

```typescript
public readonly paygPolicy: string;
```

- *Type:* string

---

##### `paymentMethod`<sup>Required</sup> <a name="paymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentMethod"></a>

```typescript
public readonly paymentMethod: string;
```

- *Type:* string

---

##### `paymentNumber`<sup>Required</sup> <a name="paymentNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentNumber"></a>

```typescript
public readonly paymentNumber: string;
```

- *Type:* string

---

##### `paymentTerm`<sup>Required</sup> <a name="paymentTerm" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentTerm"></a>

```typescript
public readonly paymentTerm: DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList</a>

---

##### `pricePeriod`<sup>Required</sup> <a name="pricePeriod" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.pricePeriod"></a>

```typescript
public readonly pricePeriod: string;
```

- *Type:* string

---

##### `pricingModel`<sup>Required</sup> <a name="pricingModel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.pricingModel"></a>

```typescript
public readonly pricingModel: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.product"></a>

```typescript
public readonly product: DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList</a>

---

##### `programType`<sup>Required</sup> <a name="programType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.programType"></a>

```typescript
public readonly programType: string;
```

- *Type:* string

---

##### `promoOrderLineId`<sup>Required</sup> <a name="promoOrderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promoOrderLineId"></a>

```typescript
public readonly promoOrderLineId: string;
```

- *Type:* string

---

##### `promotionPricingType`<sup>Required</sup> <a name="promotionPricingType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promotionPricingType"></a>

```typescript
public readonly promotionPricingType: string;
```

- *Type:* string

---

##### `promoType`<sup>Required</sup> <a name="promoType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promoType"></a>

```typescript
public readonly promoType: string;
```

- *Type:* string

---

##### `provisioningSource`<sup>Required</sup> <a name="provisioningSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.provisioningSource"></a>

```typescript
public readonly provisioningSource: string;
```

- *Type:* string

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.quantity"></a>

```typescript
public readonly quantity: string;
```

- *Type:* string

---

##### `rateCardDiscountPercentage`<sup>Required</sup> <a name="rateCardDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.rateCardDiscountPercentage"></a>

```typescript
public readonly rateCardDiscountPercentage: string;
```

- *Type:* string

---

##### `rateCards`<sup>Required</sup> <a name="rateCards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.rateCards"></a>

```typescript
public readonly rateCards: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList</a>

---

##### `ratecardType`<sup>Required</sup> <a name="ratecardType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.ratecardType"></a>

```typescript
public readonly ratecardType: string;
```

- *Type:* string

---

##### `renewalOptyId`<sup>Required</sup> <a name="renewalOptyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyId"></a>

```typescript
public readonly renewalOptyId: string;
```

- *Type:* string

---

##### `renewalOptyNumber`<sup>Required</sup> <a name="renewalOptyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyNumber"></a>

```typescript
public readonly renewalOptyNumber: string;
```

- *Type:* string

---

##### `renewalOptyType`<sup>Required</sup> <a name="renewalOptyType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyType"></a>

```typescript
public readonly renewalOptyType: string;
```

- *Type:* string

---

##### `renewedSubscribedServiceId`<sup>Required</sup> <a name="renewedSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewedSubscribedServiceId"></a>

```typescript
public readonly renewedSubscribedServiceId: string;
```

- *Type:* string

---

##### `resellerAddress`<sup>Required</sup> <a name="resellerAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerAddress"></a>

```typescript
public readonly resellerAddress: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList</a>

---

##### `resellerContact`<sup>Required</sup> <a name="resellerContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerContact"></a>

```typescript
public readonly resellerContact: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList</a>

---

##### `resellerCustomer`<sup>Required</sup> <a name="resellerCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerCustomer"></a>

```typescript
public readonly resellerCustomer: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList</a>

---

##### `revenueLineId`<sup>Required</sup> <a name="revenueLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revenueLineId"></a>

```typescript
public readonly revenueLineId: string;
```

- *Type:* string

---

##### `revenueLineNumber`<sup>Required</sup> <a name="revenueLineNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revenueLineNumber"></a>

```typescript
public readonly revenueLineNumber: string;
```

- *Type:* string

---

##### `revisedArrInLc`<sup>Required</sup> <a name="revisedArrInLc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revisedArrInLc"></a>

```typescript
public readonly revisedArrInLc: string;
```

- *Type:* string

---

##### `revisedArrInSc`<sup>Required</sup> <a name="revisedArrInSc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revisedArrInSc"></a>

```typescript
public readonly revisedArrInSc: string;
```

- *Type:* string

---

##### `salesAccountPartyId`<sup>Required</sup> <a name="salesAccountPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.salesAccountPartyId"></a>

```typescript
public readonly salesAccountPartyId: string;
```

- *Type:* string

---

##### `salesChannel`<sup>Required</sup> <a name="salesChannel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.salesChannel"></a>

```typescript
public readonly salesChannel: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `serviceToAddress`<sup>Required</sup> <a name="serviceToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToAddress"></a>

```typescript
public readonly serviceToAddress: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList</a>

---

##### `serviceToContact`<sup>Required</sup> <a name="serviceToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToContact"></a>

```typescript
public readonly serviceToContact: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList</a>

---

##### `serviceToCustomer`<sup>Required</sup> <a name="serviceToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToCustomer"></a>

```typescript
public readonly serviceToCustomer: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList</a>

---

##### `soldToContact`<sup>Required</sup> <a name="soldToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.soldToContact"></a>

```typescript
public readonly soldToContact: DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList</a>

---

##### `soldToCustomer`<sup>Required</sup> <a name="soldToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.soldToCustomer"></a>

```typescript
public readonly soldToCustomer: DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList</a>

---

##### `startDateType`<sup>Required</sup> <a name="startDateType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.startDateType"></a>

```typescript
public readonly startDateType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `subscriptionSource`<sup>Required</sup> <a name="subscriptionSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.subscriptionSource"></a>

```typescript
public readonly subscriptionSource: string;
```

- *Type:* string

---

##### `systemArrInLc`<sup>Required</sup> <a name="systemArrInLc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemArrInLc"></a>

```typescript
public readonly systemArrInLc: string;
```

- *Type:* string

---

##### `systemArrInSc`<sup>Required</sup> <a name="systemArrInSc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemArrInSc"></a>

```typescript
public readonly systemArrInSc: string;
```

- *Type:* string

---

##### `systemAtrArrInLc`<sup>Required</sup> <a name="systemAtrArrInLc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemAtrArrInLc"></a>

```typescript
public readonly systemAtrArrInLc: string;
```

- *Type:* string

---

##### `systemAtrArrInSc`<sup>Required</sup> <a name="systemAtrArrInSc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemAtrArrInSc"></a>

```typescript
public readonly systemAtrArrInSc: string;
```

- *Type:* string

---

##### `termValue`<sup>Required</sup> <a name="termValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.termValue"></a>

```typescript
public readonly termValue: string;
```

- *Type:* string

---

##### `termValueUom`<sup>Required</sup> <a name="termValueUom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.termValueUom"></a>

```typescript
public readonly termValueUom: string;
```

- *Type:* string

---

##### `timeAgreementEnd`<sup>Required</sup> <a name="timeAgreementEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeAgreementEnd"></a>

```typescript
public readonly timeAgreementEnd: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeCustomerConfig`<sup>Required</sup> <a name="timeCustomerConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeCustomerConfig"></a>

```typescript
public readonly timeCustomerConfig: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeMajorsetEnd`<sup>Required</sup> <a name="timeMajorsetEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeMajorsetEnd"></a>

```typescript
public readonly timeMajorsetEnd: string;
```

- *Type:* string

---

##### `timeMajorsetStart`<sup>Required</sup> <a name="timeMajorsetStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeMajorsetStart"></a>

```typescript
public readonly timeMajorsetStart: string;
```

- *Type:* string

---

##### `timePaymentExpiry`<sup>Required</sup> <a name="timePaymentExpiry" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timePaymentExpiry"></a>

```typescript
public readonly timePaymentExpiry: string;
```

- *Type:* string

---

##### `timeProvisioned`<sup>Required</sup> <a name="timeProvisioned" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeProvisioned"></a>

```typescript
public readonly timeProvisioned: string;
```

- *Type:* string

---

##### `timeServiceConfigurationEmailSent`<sup>Required</sup> <a name="timeServiceConfigurationEmailSent" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeServiceConfigurationEmailSent"></a>

```typescript
public readonly timeServiceConfigurationEmailSent: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `timeWelcomeEmailSent`<sup>Required</sup> <a name="timeWelcomeEmailSent" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeWelcomeEmailSent"></a>

```typescript
public readonly timeWelcomeEmailSent: string;
```

- *Type:* string

---

##### `totalValue`<sup>Required</sup> <a name="totalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.totalValue"></a>

```typescript
public readonly totalValue: string;
```

- *Type:* string

---

##### `transactionExtensionId`<sup>Required</sup> <a name="transactionExtensionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.transactionExtensionId"></a>

```typescript
public readonly transactionExtensionId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `usedAmount`<sup>Required</sup> <a name="usedAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.usedAmount"></a>

```typescript
public readonly usedAmount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServices;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices">DataOciOnesubscriptionSubscribedServicesSubscribedServices</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.isActive">isActive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm">DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.isActive"></a>

```typescript
public readonly isActive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm">DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.productCategory">productCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct">DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.billingCategory"></a>

```typescript
public readonly billingCategory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.productCategory"></a>

```typescript
public readonly productCategory: string;
```

- *Type:* string

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.ucmRateCardPartType"></a>

```typescript
public readonly ucmRateCardPartType: string;
```

- *Type:* string

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.unitOfMeasure"></a>

```typescript
public readonly unitOfMeasure: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct">DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.isoCode">isoCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.stdPrecision">stdPrecision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isoCode`<sup>Required</sup> <a name="isoCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.isoCode"></a>

```typescript
public readonly isoCode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stdPrecision`<sup>Required</sup> <a name="stdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.stdPrecision"></a>

```typescript
public readonly stdPrecision: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.discretionaryDiscountPercentage">discretionaryDiscountPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.isTier">isTier</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.overagePrice">overagePrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.rateCardTiers">rateCardTiers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.subscribedServiceId">subscribedServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.currency"></a>

```typescript
public readonly currency: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList</a>

---

##### `discretionaryDiscountPercentage`<sup>Required</sup> <a name="discretionaryDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.discretionaryDiscountPercentage"></a>

```typescript
public readonly discretionaryDiscountPercentage: string;
```

- *Type:* string

---

##### `isTier`<sup>Required</sup> <a name="isTier" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.isTier"></a>

```typescript
public readonly isTier: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.netUnitPrice"></a>

```typescript
public readonly netUnitPrice: string;
```

- *Type:* string

---

##### `overagePrice`<sup>Required</sup> <a name="overagePrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.overagePrice"></a>

```typescript
public readonly overagePrice: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.product"></a>

```typescript
public readonly product: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList</a>

---

##### `rateCardTiers`<sup>Required</sup> <a name="rateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.rateCardTiers"></a>

```typescript
public readonly rateCardTiers: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList</a>

---

##### `subscribedServiceId`<sup>Required</sup> <a name="subscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.subscribedServiceId"></a>

```typescript
public readonly subscribedServiceId: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.productCategory">productCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.billingCategory"></a>

```typescript
public readonly billingCategory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.productCategory"></a>

```typescript
public readonly productCategory: string;
```

- *Type:* string

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.ucmRateCardPartType"></a>

```typescript
public readonly ucmRateCardPartType: string;
```

- *Type:* string

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.unitOfMeasure"></a>

```typescript
public readonly unitOfMeasure: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.overagePrice">overagePrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.upToQuantity">upToQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.netUnitPrice"></a>

```typescript
public readonly netUnitPrice: string;
```

- *Type:* string

---

##### `overagePrice`<sup>Required</sup> <a name="overagePrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.overagePrice"></a>

```typescript
public readonly overagePrice: string;
```

- *Type:* string

---

##### `upToQuantity`<sup>Required</sup> <a name="upToQuantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.upToQuantity"></a>

```typescript
public readonly upToQuantity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.address1">address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.address2">address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.tcaLocationId">tcaLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tcaLocationId`<sup>Required</sup> <a name="tcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.tcaLocationId"></a>

```typescript
public readonly tcaLocationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.billSiteUseId">billSiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.isBillTo">isBillTo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.isShipTo">isShipTo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.phone">phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.service2SiteUseId">service2SiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.tcaCustAcctSiteId">tcaCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.tcaPartySiteNumber">tcaPartySiteNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billSiteUseId`<sup>Required</sup> <a name="billSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.billSiteUseId"></a>

```typescript
public readonly billSiteUseId: string;
```

- *Type:* string

---

##### `isBillTo`<sup>Required</sup> <a name="isBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.isBillTo"></a>

```typescript
public readonly isBillTo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isShipTo`<sup>Required</sup> <a name="isShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.isShipTo"></a>

```typescript
public readonly isShipTo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.location"></a>

```typescript
public readonly location: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

---

##### `service2SiteUseId`<sup>Required</sup> <a name="service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.service2SiteUseId"></a>

```typescript
public readonly service2SiteUseId: string;
```

- *Type:* string

---

##### `tcaCustAcctSiteId`<sup>Required</sup> <a name="tcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.tcaCustAcctSiteId"></a>

```typescript
public readonly tcaCustAcctSiteId: string;
```

- *Type:* string

---

##### `tcaPartySiteNumber`<sup>Required</sup> <a name="tcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.tcaPartySiteNumber"></a>

```typescript
public readonly tcaPartySiteNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaContactId">tcaContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaCustAccntSiteId">tcaCustAccntSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tcaContactId`<sup>Required</sup> <a name="tcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaContactId"></a>

```typescript
public readonly tcaContactId: string;
```

- *Type:* string

---

##### `tcaCustAccntSiteId`<sup>Required</sup> <a name="tcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaCustAccntSiteId"></a>

```typescript
public readonly tcaCustAccntSiteId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.customerChainType">customerChainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.isChainCustomer">isChainCustomer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.isPublicSector">isPublicSector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.namePhonetic">namePhonetic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaCustAccountNumber">tcaCustAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaCustomerAccountId">tcaCustomerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaPartyNumber">tcaPartyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerChainType`<sup>Required</sup> <a name="customerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.customerChainType"></a>

```typescript
public readonly customerChainType: string;
```

- *Type:* string

---

##### `isChainCustomer`<sup>Required</sup> <a name="isChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.isChainCustomer"></a>

```typescript
public readonly isChainCustomer: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPublicSector`<sup>Required</sup> <a name="isPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.isPublicSector"></a>

```typescript
public readonly isPublicSector: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePhonetic`<sup>Required</sup> <a name="namePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.namePhonetic"></a>

```typescript
public readonly namePhonetic: string;
```

- *Type:* string

---

##### `tcaCustAccountNumber`<sup>Required</sup> <a name="tcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaCustAccountNumber"></a>

```typescript
public readonly tcaCustAccountNumber: string;
```

- *Type:* string

---

##### `tcaCustomerAccountId`<sup>Required</sup> <a name="tcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaCustomerAccountId"></a>

```typescript
public readonly tcaCustomerAccountId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `tcaPartyNumber`<sup>Required</sup> <a name="tcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaPartyNumber"></a>

```typescript
public readonly tcaPartyNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.address1">address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.address2">address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.tcaLocationId">tcaLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tcaLocationId`<sup>Required</sup> <a name="tcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.tcaLocationId"></a>

```typescript
public readonly tcaLocationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.billSiteUseId">billSiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.isBillTo">isBillTo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.isShipTo">isShipTo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.phone">phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.service2SiteUseId">service2SiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.tcaCustAcctSiteId">tcaCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.tcaPartySiteNumber">tcaPartySiteNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billSiteUseId`<sup>Required</sup> <a name="billSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.billSiteUseId"></a>

```typescript
public readonly billSiteUseId: string;
```

- *Type:* string

---

##### `isBillTo`<sup>Required</sup> <a name="isBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.isBillTo"></a>

```typescript
public readonly isBillTo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isShipTo`<sup>Required</sup> <a name="isShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.isShipTo"></a>

```typescript
public readonly isShipTo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.location"></a>

```typescript
public readonly location: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

---

##### `service2SiteUseId`<sup>Required</sup> <a name="service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.service2SiteUseId"></a>

```typescript
public readonly service2SiteUseId: string;
```

- *Type:* string

---

##### `tcaCustAcctSiteId`<sup>Required</sup> <a name="tcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.tcaCustAcctSiteId"></a>

```typescript
public readonly tcaCustAcctSiteId: string;
```

- *Type:* string

---

##### `tcaPartySiteNumber`<sup>Required</sup> <a name="tcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.tcaPartySiteNumber"></a>

```typescript
public readonly tcaPartySiteNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaContactId">tcaContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaCustAccntSiteId">tcaCustAccntSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tcaContactId`<sup>Required</sup> <a name="tcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaContactId"></a>

```typescript
public readonly tcaContactId: string;
```

- *Type:* string

---

##### `tcaCustAccntSiteId`<sup>Required</sup> <a name="tcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaCustAccntSiteId"></a>

```typescript
public readonly tcaCustAccntSiteId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.customerChainType">customerChainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.isChainCustomer">isChainCustomer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.isPublicSector">isPublicSector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.namePhonetic">namePhonetic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaCustAccountNumber">tcaCustAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaCustomerAccountId">tcaCustomerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaPartyNumber">tcaPartyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerChainType`<sup>Required</sup> <a name="customerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.customerChainType"></a>

```typescript
public readonly customerChainType: string;
```

- *Type:* string

---

##### `isChainCustomer`<sup>Required</sup> <a name="isChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.isChainCustomer"></a>

```typescript
public readonly isChainCustomer: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPublicSector`<sup>Required</sup> <a name="isPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.isPublicSector"></a>

```typescript
public readonly isPublicSector: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePhonetic`<sup>Required</sup> <a name="namePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.namePhonetic"></a>

```typescript
public readonly namePhonetic: string;
```

- *Type:* string

---

##### `tcaCustAccountNumber`<sup>Required</sup> <a name="tcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```typescript
public readonly tcaCustAccountNumber: string;
```

- *Type:* string

---

##### `tcaCustomerAccountId`<sup>Required</sup> <a name="tcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```typescript
public readonly tcaCustomerAccountId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `tcaPartyNumber`<sup>Required</sup> <a name="tcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaPartyNumber"></a>

```typescript
public readonly tcaPartyNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaContactId">tcaContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaCustAccntSiteId">tcaCustAccntSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tcaContactId`<sup>Required</sup> <a name="tcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaContactId"></a>

```typescript
public readonly tcaContactId: string;
```

- *Type:* string

---

##### `tcaCustAccntSiteId`<sup>Required</sup> <a name="tcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaCustAccntSiteId"></a>

```typescript
public readonly tcaCustAccntSiteId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscribedServices } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.customerChainType">customerChainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.isChainCustomer">isChainCustomer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.isPublicSector">isPublicSector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.namePhonetic">namePhonetic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaCustAccountNumber">tcaCustAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaCustomerAccountId">tcaCustomerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaPartyId">tcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaPartyNumber">tcaPartyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerChainType`<sup>Required</sup> <a name="customerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.customerChainType"></a>

```typescript
public readonly customerChainType: string;
```

- *Type:* string

---

##### `isChainCustomer`<sup>Required</sup> <a name="isChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.isChainCustomer"></a>

```typescript
public readonly isChainCustomer: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPublicSector`<sup>Required</sup> <a name="isPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.isPublicSector"></a>

```typescript
public readonly isPublicSector: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePhonetic`<sup>Required</sup> <a name="namePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.namePhonetic"></a>

```typescript
public readonly namePhonetic: string;
```

- *Type:* string

---

##### `tcaCustAccountNumber`<sup>Required</sup> <a name="tcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```typescript
public readonly tcaCustAccountNumber: string;
```

- *Type:* string

---

##### `tcaCustomerAccountId`<sup>Required</sup> <a name="tcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```typescript
public readonly tcaCustomerAccountId: string;
```

- *Type:* string

---

##### `tcaPartyId`<sup>Required</sup> <a name="tcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaPartyId"></a>

```typescript
public readonly tcaPartyId: string;
```

- *Type:* string

---

##### `tcaPartyNumber`<sup>Required</sup> <a name="tcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaPartyNumber"></a>

```typescript
public readonly tcaPartyNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer</a>

---



