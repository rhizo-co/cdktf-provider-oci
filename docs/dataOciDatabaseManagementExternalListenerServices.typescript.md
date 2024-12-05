# `dataOciDatabaseManagementExternalListenerServices` Submodule <a name="`dataOciDatabaseManagementExternalListenerServices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalListenerServices <a name="DataOciDatabaseManagementExternalListenerServices" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services oci_database_management_external_listener_services}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalListenerServices } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices(scope: Construct, id: string, config: DataOciDatabaseManagementExternalListenerServicesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig">DataOciDatabaseManagementExternalListenerServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig">DataOciDatabaseManagementExternalListenerServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementExternalListenerServicesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter">DataOciDatabaseManagementExternalListenerServicesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.resetOpcNamedCredentialId"></a>

```typescript
public resetOpcNamedCredentialId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalListenerServices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementExternalListenerServices } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementExternalListenerServices } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementExternalListenerServices } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementExternalListenerServices } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalListenerServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementExternalListenerServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementExternalListenerServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalListenerServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.externalListenerServiceCollection">externalListenerServiceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList">DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList">DataOciDatabaseManagementExternalListenerServicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.externalListenerIdInput">externalListenerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter">DataOciDatabaseManagementExternalListenerServicesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.externalListenerId">externalListenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `externalListenerServiceCollection`<sup>Required</sup> <a name="externalListenerServiceCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.externalListenerServiceCollection"></a>

```typescript
public readonly externalListenerServiceCollection: DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList">DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementExternalListenerServicesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList">DataOciDatabaseManagementExternalListenerServicesFilterList</a>

---

##### `externalListenerIdInput`<sup>Optional</sup> <a name="externalListenerIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.externalListenerIdInput"></a>

```typescript
public readonly externalListenerIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementExternalListenerServicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter">DataOciDatabaseManagementExternalListenerServicesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.opcNamedCredentialIdInput"></a>

```typescript
public readonly opcNamedCredentialIdInput: string;
```

- *Type:* string

---

##### `externalListenerId`<sup>Required</sup> <a name="externalListenerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.externalListenerId"></a>

```typescript
public readonly externalListenerId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServices.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalListenerServicesConfig <a name="DataOciDatabaseManagementExternalListenerServicesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalListenerServices } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalListenerServicesConfig: dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.externalListenerId">externalListenerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services#external_listener_id DataOciDatabaseManagementExternalListenerServices#external_listener_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services#managed_database_id DataOciDatabaseManagementExternalListenerServices#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter">DataOciDatabaseManagementExternalListenerServicesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services#id DataOciDatabaseManagementExternalListenerServices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services#opc_named_credential_id DataOciDatabaseManagementExternalListenerServices#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `externalListenerId`<sup>Required</sup> <a name="externalListenerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.externalListenerId"></a>

```typescript
public readonly externalListenerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services#external_listener_id DataOciDatabaseManagementExternalListenerServices#external_listener_id}.

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services#managed_database_id DataOciDatabaseManagementExternalListenerServices#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementExternalListenerServicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter">DataOciDatabaseManagementExternalListenerServicesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services#filter DataOciDatabaseManagementExternalListenerServices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services#id DataOciDatabaseManagementExternalListenerServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesConfig.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services#opc_named_credential_id DataOciDatabaseManagementExternalListenerServices#opc_named_credential_id}.

---

### DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollection <a name="DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalListenerServices } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollection: dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollection = { ... }
```


### DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItems <a name="DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalListenerServices } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItems: dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItems = { ... }
```


### DataOciDatabaseManagementExternalListenerServicesFilter <a name="DataOciDatabaseManagementExternalListenerServicesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalListenerServices } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalListenerServicesFilter: dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services#name DataOciDatabaseManagementExternalListenerServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services#values DataOciDatabaseManagementExternalListenerServices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services#regex DataOciDatabaseManagementExternalListenerServices#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services#name DataOciDatabaseManagementExternalListenerServices#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services#values DataOciDatabaseManagementExternalListenerServices#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_listener_services#regex DataOciDatabaseManagementExternalListenerServices#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList <a name="DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalListenerServices } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalListenerServices } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.property.listenerId">listenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItems">DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItems">DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItems</a>

---


### DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList <a name="DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalListenerServices } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference <a name="DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalListenerServices } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList">DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollection">DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList">DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollection">DataOciDatabaseManagementExternalListenerServicesExternalListenerServiceCollection</a>

---


### DataOciDatabaseManagementExternalListenerServicesFilterList <a name="DataOciDatabaseManagementExternalListenerServicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalListenerServices } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalListenerServicesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter">DataOciDatabaseManagementExternalListenerServicesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementExternalListenerServicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter">DataOciDatabaseManagementExternalListenerServicesFilter</a>[]

---


### DataOciDatabaseManagementExternalListenerServicesFilterOutputReference <a name="DataOciDatabaseManagementExternalListenerServicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalListenerServices } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter">DataOciDatabaseManagementExternalListenerServicesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementExternalListenerServicesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalListenerServices.DataOciDatabaseManagementExternalListenerServicesFilter">DataOciDatabaseManagementExternalListenerServicesFilter</a>

---



