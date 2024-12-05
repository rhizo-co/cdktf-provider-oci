# `dataOciOdaOdaPrivateEndpointAttachments` Submodule <a name="`dataOciOdaOdaPrivateEndpointAttachments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOdaOdaPrivateEndpointAttachments <a name="DataOciOdaOdaPrivateEndpointAttachments" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments oci_oda_oda_private_endpoint_attachments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments(scope: Construct, id: string, config: DataOciOdaOdaPrivateEndpointAttachmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig">DataOciOdaOdaPrivateEndpointAttachmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig">DataOciOdaOdaPrivateEndpointAttachmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOdaOdaPrivateEndpointAttachmentsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpointAttachments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isConstruct"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointAttachments } from 'rhizo-co-terraform-provider-oci'

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isTerraformElement"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointAttachments } from 'rhizo-co-terraform-provider-oci'

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isTerraformDataSource"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointAttachments } from 'rhizo-co-terraform-provider-oci'

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.generateConfigForImport"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointAttachments } from 'rhizo-co-terraform-provider-oci'

dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpointAttachments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOdaOdaPrivateEndpointAttachments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOdaOdaPrivateEndpointAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOdaOdaPrivateEndpointAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList">DataOciOdaOdaPrivateEndpointAttachmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.odaPrivateEndpointAttachmentCollection">odaPrivateEndpointAttachmentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList">DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.odaPrivateEndpointIdInput">odaPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.odaPrivateEndpointId">odaPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.filter"></a>

```typescript
public readonly filter: DataOciOdaOdaPrivateEndpointAttachmentsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList">DataOciOdaOdaPrivateEndpointAttachmentsFilterList</a>

---

##### `odaPrivateEndpointAttachmentCollection`<sup>Required</sup> <a name="odaPrivateEndpointAttachmentCollection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.odaPrivateEndpointAttachmentCollection"></a>

```typescript
public readonly odaPrivateEndpointAttachmentCollection: DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList">DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOdaOdaPrivateEndpointAttachmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `odaPrivateEndpointIdInput`<sup>Optional</sup> <a name="odaPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.odaPrivateEndpointIdInput"></a>

```typescript
public readonly odaPrivateEndpointIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `odaPrivateEndpointId`<sup>Required</sup> <a name="odaPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.odaPrivateEndpointId"></a>

```typescript
public readonly odaPrivateEndpointId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOdaOdaPrivateEndpointAttachmentsConfig <a name="DataOciOdaOdaPrivateEndpointAttachmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.Initializer"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointAttachments } from 'rhizo-co-terraform-provider-oci'

const dataOciOdaOdaPrivateEndpointAttachmentsConfig: dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#compartment_id DataOciOdaOdaPrivateEndpointAttachments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.odaPrivateEndpointId">odaPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#oda_private_endpoint_id DataOciOdaOdaPrivateEndpointAttachments#oda_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#id DataOciOdaOdaPrivateEndpointAttachments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#state DataOciOdaOdaPrivateEndpointAttachments#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#compartment_id DataOciOdaOdaPrivateEndpointAttachments#compartment_id}.

---

##### `odaPrivateEndpointId`<sup>Required</sup> <a name="odaPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.odaPrivateEndpointId"></a>

```typescript
public readonly odaPrivateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#oda_private_endpoint_id DataOciOdaOdaPrivateEndpointAttachments#oda_private_endpoint_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOdaOdaPrivateEndpointAttachmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#filter DataOciOdaOdaPrivateEndpointAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#id DataOciOdaOdaPrivateEndpointAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#state DataOciOdaOdaPrivateEndpointAttachments#state}.

---

### DataOciOdaOdaPrivateEndpointAttachmentsFilter <a name="DataOciOdaOdaPrivateEndpointAttachmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter.Initializer"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointAttachments } from 'rhizo-co-terraform-provider-oci'

const dataOciOdaOdaPrivateEndpointAttachmentsFilter: dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#name DataOciOdaOdaPrivateEndpointAttachments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#values DataOciOdaOdaPrivateEndpointAttachments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#regex DataOciOdaOdaPrivateEndpointAttachments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#name DataOciOdaOdaPrivateEndpointAttachments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#values DataOciOdaOdaPrivateEndpointAttachments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_attachments#regex DataOciOdaOdaPrivateEndpointAttachments#regex}.

---

### DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection <a name="DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection.Initializer"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointAttachments } from 'rhizo-co-terraform-provider-oci'

const dataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection: dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection = { ... }
```


### DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems <a name="DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems.Initializer"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointAttachments } from 'rhizo-co-terraform-provider-oci'

const dataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems: dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOdaOdaPrivateEndpointAttachmentsFilterList <a name="DataOciOdaOdaPrivateEndpointAttachmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.Initializer"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.get"></a>

```typescript
public get(index: number): DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOdaOdaPrivateEndpointAttachmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>[]

---


### DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference <a name="DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOdaOdaPrivateEndpointAttachmentsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsFilter">DataOciOdaOdaPrivateEndpointAttachmentsFilter</a>

---


### DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList <a name="DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference <a name="DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.odaInstanceId">odaInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.odaPrivateEndpointId">odaPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems">DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `odaInstanceId`<sup>Required</sup> <a name="odaInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.odaInstanceId"></a>

```typescript
public readonly odaInstanceId: string;
```

- *Type:* string

---

##### `odaPrivateEndpointId`<sup>Required</sup> <a name="odaPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.odaPrivateEndpointId"></a>

```typescript
public readonly odaPrivateEndpointId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems">DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItems</a>

---


### DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList <a name="DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.Initializer"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.get"></a>

```typescript
public get(index: number): DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference <a name="DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOdaOdaPrivateEndpointAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList">DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection">DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList">DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointAttachments.DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection">DataOciOdaOdaPrivateEndpointAttachmentsOdaPrivateEndpointAttachmentCollection</a>

---



