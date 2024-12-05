# `dataOciCoreLetterOfAuthority` Submodule <a name="`dataOciCoreLetterOfAuthority` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreLetterOfAuthority <a name="DataOciCoreLetterOfAuthority" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_letter_of_authority oci_core_letter_of_authority}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.Initializer"></a>

```typescript
import { dataOciCoreLetterOfAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority(scope: Construct, id: string, config: DataOciCoreLetterOfAuthorityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig">DataOciCoreLetterOfAuthorityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig">DataOciCoreLetterOfAuthorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreLetterOfAuthority resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isConstruct"></a>

```typescript
import { dataOciCoreLetterOfAuthority } from 'rhizo-co-terraform-provider-oci'

dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isTerraformElement"></a>

```typescript
import { dataOciCoreLetterOfAuthority } from 'rhizo-co-terraform-provider-oci'

dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isTerraformDataSource"></a>

```typescript
import { dataOciCoreLetterOfAuthority } from 'rhizo-co-terraform-provider-oci'

dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.generateConfigForImport"></a>

```typescript
import { dataOciCoreLetterOfAuthority } from 'rhizo-co-terraform-provider-oci'

dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreLetterOfAuthority resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreLetterOfAuthority to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreLetterOfAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_letter_of_authority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreLetterOfAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.authorizedEntityName">authorizedEntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.circuitType">circuitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.facilityLocation">facilityLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.timeExpires">timeExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.timeIssued">timeIssued</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.crossConnectIdInput">crossConnectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.crossConnectId">crossConnectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `authorizedEntityName`<sup>Required</sup> <a name="authorizedEntityName" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.authorizedEntityName"></a>

```typescript
public readonly authorizedEntityName: string;
```

- *Type:* string

---

##### `circuitType`<sup>Required</sup> <a name="circuitType" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.circuitType"></a>

```typescript
public readonly circuitType: string;
```

- *Type:* string

---

##### `facilityLocation`<sup>Required</sup> <a name="facilityLocation" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.facilityLocation"></a>

```typescript
public readonly facilityLocation: string;
```

- *Type:* string

---

##### `portName`<sup>Required</sup> <a name="portName" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `timeExpires`<sup>Required</sup> <a name="timeExpires" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.timeExpires"></a>

```typescript
public readonly timeExpires: string;
```

- *Type:* string

---

##### `timeIssued`<sup>Required</sup> <a name="timeIssued" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.timeIssued"></a>

```typescript
public readonly timeIssued: string;
```

- *Type:* string

---

##### `crossConnectIdInput`<sup>Optional</sup> <a name="crossConnectIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.crossConnectIdInput"></a>

```typescript
public readonly crossConnectIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `crossConnectId`<sup>Required</sup> <a name="crossConnectId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.crossConnectId"></a>

```typescript
public readonly crossConnectId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthority.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreLetterOfAuthorityConfig <a name="DataOciCoreLetterOfAuthorityConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.Initializer"></a>

```typescript
import { dataOciCoreLetterOfAuthority } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreLetterOfAuthorityConfig: dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.crossConnectId">crossConnectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_letter_of_authority#cross_connect_id DataOciCoreLetterOfAuthority#cross_connect_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_letter_of_authority#id DataOciCoreLetterOfAuthority#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `crossConnectId`<sup>Required</sup> <a name="crossConnectId" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.crossConnectId"></a>

```typescript
public readonly crossConnectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_letter_of_authority#cross_connect_id DataOciCoreLetterOfAuthority#cross_connect_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreLetterOfAuthority.DataOciCoreLetterOfAuthorityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_letter_of_authority#id DataOciCoreLetterOfAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



