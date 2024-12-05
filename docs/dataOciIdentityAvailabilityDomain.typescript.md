# `dataOciIdentityAvailabilityDomain` Submodule <a name="`dataOciIdentityAvailabilityDomain` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityAvailabilityDomain <a name="DataOciIdentityAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_availability_domain oci_identity_availability_domain}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.Initializer"></a>

```typescript
import { dataOciIdentityAvailabilityDomain } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain(scope: Construct, id: string, config: DataOciIdentityAvailabilityDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig">DataOciIdentityAvailabilityDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig">DataOciIdentityAvailabilityDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.resetAdNumber">resetAdNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAdNumber` <a name="resetAdNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.resetAdNumber"></a>

```typescript
public resetAdNumber(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityAvailabilityDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.isConstruct"></a>

```typescript
import { dataOciIdentityAvailabilityDomain } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.isTerraformElement"></a>

```typescript
import { dataOciIdentityAvailabilityDomain } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityAvailabilityDomain } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.generateConfigForImport"></a>

```typescript
import { dataOciIdentityAvailabilityDomain } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityAvailabilityDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityAvailabilityDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityAvailabilityDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_availability_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityAvailabilityDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.adNumberInput">adNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.adNumber">adNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `adNumberInput`<sup>Optional</sup> <a name="adNumberInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.adNumberInput"></a>

```typescript
public readonly adNumberInput: number;
```

- *Type:* number

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `adNumber`<sup>Required</sup> <a name="adNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.adNumber"></a>

```typescript
public readonly adNumber: number;
```

- *Type:* number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityAvailabilityDomainConfig <a name="DataOciIdentityAvailabilityDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.Initializer"></a>

```typescript
import { dataOciIdentityAvailabilityDomain } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityAvailabilityDomainConfig: dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_availability_domain#compartment_id DataOciIdentityAvailabilityDomain#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.adNumber">adNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_availability_domain#ad_number DataOciIdentityAvailabilityDomain#ad_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_availability_domain#id DataOciIdentityAvailabilityDomain#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_availability_domain#compartment_id DataOciIdentityAvailabilityDomain#compartment_id}.

---

##### `adNumber`<sup>Optional</sup> <a name="adNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.adNumber"></a>

```typescript
public readonly adNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_availability_domain#ad_number DataOciIdentityAvailabilityDomain#ad_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityAvailabilityDomain.DataOciIdentityAvailabilityDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_availability_domain#id DataOciIdentityAvailabilityDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



