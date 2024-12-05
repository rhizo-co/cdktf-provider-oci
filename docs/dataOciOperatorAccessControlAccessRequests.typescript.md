# `dataOciOperatorAccessControlAccessRequests` Submodule <a name="`dataOciOperatorAccessControlAccessRequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlAccessRequests <a name="DataOciOperatorAccessControlAccessRequests" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests oci_operator_access_control_access_requests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests(scope: Construct, id: string, config: DataOciOperatorAccessControlAccessRequestsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig">DataOciOperatorAccessControlAccessRequestsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig">DataOciOperatorAccessControlAccessRequestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetResourceName">resetResourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetTimeEnd">resetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetTimeStart">resetTimeStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOperatorAccessControlAccessRequestsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceName` <a name="resetResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetResourceName"></a>

```typescript
public resetResourceName(): void
```

##### `resetResourceType` <a name="resetResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeEnd` <a name="resetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetTimeEnd"></a>

```typescript
public resetTimeEnd(): void
```

##### `resetTimeStart` <a name="resetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetTimeStart"></a>

```typescript
public resetTimeStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequests resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isConstruct"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformElement"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformDataSource"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOperatorAccessControlAccessRequests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOperatorAccessControlAccessRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlAccessRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.accessRequestCollection">accessRequestCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList">DataOciOperatorAccessControlAccessRequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeEndInput">timeEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeStartInput">timeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessRequestCollection`<sup>Required</sup> <a name="accessRequestCollection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.accessRequestCollection"></a>

```typescript
public readonly accessRequestCollection: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.filter"></a>

```typescript
public readonly filter: DataOciOperatorAccessControlAccessRequestsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList">DataOciOperatorAccessControlAccessRequestsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOperatorAccessControlAccessRequestsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeEndInput`<sup>Optional</sup> <a name="timeEndInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeEndInput"></a>

```typescript
public readonly timeEndInput: string;
```

- *Type:* string

---

##### `timeStartInput`<sup>Optional</sup> <a name="timeStartInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeStartInput"></a>

```typescript
public readonly timeStartInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlAccessRequestsAccessRequestCollection <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlAccessRequestsAccessRequestCollection: dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection = { ... }
```


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems: dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems = { ... }
```


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails: dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails = { ... }
```


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails: dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails = { ... }
```


### DataOciOperatorAccessControlAccessRequestsConfig <a name="DataOciOperatorAccessControlAccessRequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlAccessRequestsConfig: dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#compartment_id DataOciOperatorAccessControlAccessRequests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#id DataOciOperatorAccessControlAccessRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.resourceName">resourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_name DataOciOperatorAccessControlAccessRequests#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_type DataOciOperatorAccessControlAccessRequests#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#state DataOciOperatorAccessControlAccessRequests#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.timeEnd">timeEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_end DataOciOperatorAccessControlAccessRequests#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.timeStart">timeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_start DataOciOperatorAccessControlAccessRequests#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#compartment_id DataOciOperatorAccessControlAccessRequests#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOperatorAccessControlAccessRequestsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#filter DataOciOperatorAccessControlAccessRequests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#id DataOciOperatorAccessControlAccessRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_name DataOciOperatorAccessControlAccessRequests#resource_name}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_type DataOciOperatorAccessControlAccessRequests#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#state DataOciOperatorAccessControlAccessRequests#state}.

---

##### `timeEnd`<sup>Optional</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_end DataOciOperatorAccessControlAccessRequests#time_end}.

---

##### `timeStart`<sup>Optional</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_start DataOciOperatorAccessControlAccessRequests#time_start}.

---

### DataOciOperatorAccessControlAccessRequestsFilter <a name="DataOciOperatorAccessControlAccessRequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlAccessRequestsFilter: dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#name DataOciOperatorAccessControlAccessRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#values DataOciOperatorAccessControlAccessRequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#regex DataOciOperatorAccessControlAccessRequests#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#name DataOciOperatorAccessControlAccessRequests#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#values DataOciOperatorAccessControlAccessRequests#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#regex DataOciOperatorAccessControlAccessRequests#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.get"></a>

```typescript
public get(index: number): DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalAction">approvalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalAdditionalMessage">approvalAdditionalMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalComment">approvalComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approverId">approverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.timeApprovedForAccess">timeApprovedForAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.timeOfAuthorization">timeOfAuthorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvalAction`<sup>Required</sup> <a name="approvalAction" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalAction"></a>

```typescript
public readonly approvalAction: string;
```

- *Type:* string

---

##### `approvalAdditionalMessage`<sup>Required</sup> <a name="approvalAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalAdditionalMessage"></a>

```typescript
public readonly approvalAdditionalMessage: string;
```

- *Type:* string

---

##### `approvalComment`<sup>Required</sup> <a name="approvalComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalComment"></a>

```typescript
public readonly approvalComment: string;
```

- *Type:* string

---

##### `approverId`<sup>Required</sup> <a name="approverId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approverId"></a>

```typescript
public readonly approverId: string;
```

- *Type:* string

---

##### `timeApprovedForAccess`<sup>Required</sup> <a name="timeApprovedForAccess" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.timeApprovedForAccess"></a>

```typescript
public readonly timeApprovedForAccess: string;
```

- *Type:* string

---

##### `timeOfAuthorization`<sup>Required</sup> <a name="timeOfAuthorization" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.timeOfAuthorization"></a>

```typescript
public readonly timeOfAuthorization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails</a>

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.get"></a>

```typescript
public get(index: number): DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalAction">approvalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalAdditionalMessage">approvalAdditionalMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalComment">approvalComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approverId">approverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.timeApprovedForAccess">timeApprovedForAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.timeOfAuthorization">timeOfAuthorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvalAction`<sup>Required</sup> <a name="approvalAction" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalAction"></a>

```typescript
public readonly approvalAction: string;
```

- *Type:* string

---

##### `approvalAdditionalMessage`<sup>Required</sup> <a name="approvalAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalAdditionalMessage"></a>

```typescript
public readonly approvalAdditionalMessage: string;
```

- *Type:* string

---

##### `approvalComment`<sup>Required</sup> <a name="approvalComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalComment"></a>

```typescript
public readonly approvalComment: string;
```

- *Type:* string

---

##### `approverId`<sup>Required</sup> <a name="approverId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approverId"></a>

```typescript
public readonly approverId: string;
```

- *Type:* string

---

##### `timeApprovedForAccess`<sup>Required</sup> <a name="timeApprovedForAccess" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.timeApprovedForAccess"></a>

```typescript
public readonly timeApprovedForAccess: string;
```

- *Type:* string

---

##### `timeOfAuthorization`<sup>Required</sup> <a name="timeOfAuthorization" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.timeOfAuthorization"></a>

```typescript
public readonly timeOfAuthorization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails</a>

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.accessReasonSummary">accessReasonSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.actionRequestsList">actionRequestsList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.approverComment">approverComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.approverDetails">approverDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.auditType">auditType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.closureComment">closureComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.extendDuration">extendDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.extensionApproverDetails">extensionApproverDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.isAutoApproved">isAutoApproved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.isValidateAssignment">isValidateAssignment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfApprovers">numberOfApprovers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfApproversRequired">numberOfApproversRequired</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfExtensionApprovers">numberOfExtensionApprovers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlAdditionalMessage">opctlAdditionalMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlId">opctlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlName">opctlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.operatorId">operatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.requestId">requestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.subResourceList">subResourceList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.systemMessage">systemMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfCreation">timeOfCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfModification">timeOfModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfUserCreation">timeOfUserCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeRequestedForFutureAccess">timeRequestedForFutureAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.workflowId">workflowId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessReasonSummary`<sup>Required</sup> <a name="accessReasonSummary" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.accessReasonSummary"></a>

```typescript
public readonly accessReasonSummary: string;
```

- *Type:* string

---

##### `actionRequestsList`<sup>Required</sup> <a name="actionRequestsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.actionRequestsList"></a>

```typescript
public readonly actionRequestsList: string[];
```

- *Type:* string[]

---

##### `approverComment`<sup>Required</sup> <a name="approverComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.approverComment"></a>

```typescript
public readonly approverComment: string;
```

- *Type:* string

---

##### `approverDetails`<sup>Required</sup> <a name="approverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.approverDetails"></a>

```typescript
public readonly approverDetails: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList</a>

---

##### `auditType`<sup>Required</sup> <a name="auditType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.auditType"></a>

```typescript
public readonly auditType: string[];
```

- *Type:* string[]

---

##### `closureComment`<sup>Required</sup> <a name="closureComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.closureComment"></a>

```typescript
public readonly closureComment: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `extendDuration`<sup>Required</sup> <a name="extendDuration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.extendDuration"></a>

```typescript
public readonly extendDuration: number;
```

- *Type:* number

---

##### `extensionApproverDetails`<sup>Required</sup> <a name="extensionApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.extensionApproverDetails"></a>

```typescript
public readonly extensionApproverDetails: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAutoApproved`<sup>Required</sup> <a name="isAutoApproved" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.isAutoApproved"></a>

```typescript
public readonly isAutoApproved: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isValidateAssignment`<sup>Required</sup> <a name="isValidateAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.isValidateAssignment"></a>

```typescript
public readonly isValidateAssignment: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `numberOfApprovers`<sup>Required</sup> <a name="numberOfApprovers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfApprovers"></a>

```typescript
public readonly numberOfApprovers: number;
```

- *Type:* number

---

##### `numberOfApproversRequired`<sup>Required</sup> <a name="numberOfApproversRequired" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfApproversRequired"></a>

```typescript
public readonly numberOfApproversRequired: number;
```

- *Type:* number

---

##### `numberOfExtensionApprovers`<sup>Required</sup> <a name="numberOfExtensionApprovers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfExtensionApprovers"></a>

```typescript
public readonly numberOfExtensionApprovers: number;
```

- *Type:* number

---

##### `opctlAdditionalMessage`<sup>Required</sup> <a name="opctlAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlAdditionalMessage"></a>

```typescript
public readonly opctlAdditionalMessage: string;
```

- *Type:* string

---

##### `opctlId`<sup>Required</sup> <a name="opctlId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlId"></a>

```typescript
public readonly opctlId: string;
```

- *Type:* string

---

##### `opctlName`<sup>Required</sup> <a name="opctlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlName"></a>

```typescript
public readonly opctlName: string;
```

- *Type:* string

---

##### `operatorId`<sup>Required</sup> <a name="operatorId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.operatorId"></a>

```typescript
public readonly operatorId: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.requestId"></a>

```typescript
public readonly requestId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subResourceList`<sup>Required</sup> <a name="subResourceList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.subResourceList"></a>

```typescript
public readonly subResourceList: string[];
```

- *Type:* string[]

---

##### `systemMessage`<sup>Required</sup> <a name="systemMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.systemMessage"></a>

```typescript
public readonly systemMessage: string;
```

- *Type:* string

---

##### `timeOfCreation`<sup>Required</sup> <a name="timeOfCreation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfCreation"></a>

```typescript
public readonly timeOfCreation: string;
```

- *Type:* string

---

##### `timeOfModification`<sup>Required</sup> <a name="timeOfModification" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfModification"></a>

```typescript
public readonly timeOfModification: string;
```

- *Type:* string

---

##### `timeOfUserCreation`<sup>Required</sup> <a name="timeOfUserCreation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfUserCreation"></a>

```typescript
public readonly timeOfUserCreation: string;
```

- *Type:* string

---

##### `timeRequestedForFutureAccess`<sup>Required</sup> <a name="timeRequestedForFutureAccess" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeRequestedForFutureAccess"></a>

```typescript
public readonly timeRequestedForFutureAccess: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.workflowId"></a>

```typescript
public readonly workflowId: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems</a>

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.get"></a>

```typescript
public get(index: number): DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection">DataOciOperatorAccessControlAccessRequestsAccessRequestCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOperatorAccessControlAccessRequestsAccessRequestCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection">DataOciOperatorAccessControlAccessRequestsAccessRequestCollection</a>

---


### DataOciOperatorAccessControlAccessRequestsFilterList <a name="DataOciOperatorAccessControlAccessRequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.get"></a>

```typescript
public get(index: number): DataOciOperatorAccessControlAccessRequestsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOperatorAccessControlAccessRequestsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>[]

---


### DataOciOperatorAccessControlAccessRequestsFilterOutputReference <a name="DataOciOperatorAccessControlAccessRequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOperatorAccessControlAccessRequestsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>

---



